import { useLoaderData, Link } from "react-router-dom";

function Home() {
    const planets = useLoaderData();

    return (
        <div className="container">
            <h1>Планеты Star Wars</h1>

            <div className="planet-list">
                {planets.map((planet) => {
                    const id = planet.url.split("/").filter(Boolean).pop();

                    return (
                        <div className="planet-card" key={id}>
                            <h2>{planet.name}</h2>

                            <p>
                                <strong>Климат:</strong> {planet.climate}
                            </p>

                            <p>
                                <strong>Местность:</strong> {planet.terrain}
                            </p>

                            <p>
                                <strong>Население:</strong> {planet.population}
                            </p>

                            <Link
                                to={`/planet/${id}`}
                                state={{ visited: true }}
                                className="details-link"
                            >
                                Подробнее
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;