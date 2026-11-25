import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import PlanetDetails from "./pages/PlanetDetails";
import PersonDetails from "./pages/PersonDetails";

const API = "https://swapi.info/api";

async function getData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Не удалось загрузить данные");
    }

    return response.json();
}

async function homeLoader() {
    return getData(`${API}/planets`);
}

async function planetLoader({ params }) {
    const planet = await getData(`${API}/planets/${params.id}`);

    const residents = await Promise.all(
        planet.residents.map((url) => getData(url))
    );

    return {
        planet,
        residents
    };
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: homeLoader
    },
    {
        path: "/planet/:id",
        element: <PlanetDetails />,
        loader: planetLoader
    },
    {
        path: "/person/:id",
        element: <PersonDetails />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;