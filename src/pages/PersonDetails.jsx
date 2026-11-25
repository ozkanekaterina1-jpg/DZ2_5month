import { useLocation, Link } from "react-router-dom";

function PersonDetails() {
    const location = useLocation();

    const person = location.state?.person;
    const planetName = location.state?.planetName;

    if (!person) {
        return (
            <div className="container">
                <h2>Данные персонажа не переданы</h2>
                <p>Откройте персонажа из списка жителей планеты.</p>
                <Link to="/">На главную</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <Link to="/" className="back-link">
                ← На главную
            </Link>

            <div className="person-card">
                <h1>{person.name}</h1>

                <p><strong>Пол:</strong> {person.gender}</p>
                <p><strong>Рост:</strong> {person.height} см</p>
                <p><strong>Вес:</strong> {person.mass} кг</p>
                <p><strong>Цвет волос:</strong> {person.hair_color}</p>
                <p><strong>Цвет глаз:</strong> {person.eye_color}</p>
                <p><strong>Год рождения:</strong> {person.birth_year}</p>
                <p><strong>Планета:</strong> {planetName}</p>
            </div>
        </div>
    );
}

export default PersonDetails;