import {useLoaderData, useLocation, Link} from "react-router-dom";

function PlanetDetails() {
    const { planet, residents } = useLoaderData();
    const location = useLocation();
    const visited = location.state?.visited || false;

    return (
        <div className="container">
            <Link to="/" className="back-link">
                ← Назад к планетам
            </Link>

            <div className="planet-info">
                <h1>{planet.name}</h1>

                {visited && (
                    <span className="visited">
            ✓ Посещено
          </span>
                )}

                <p><strong>Климат:</strong> {planet.climate}</p>
                <p><strong>Местность:</strong> {planet.terrain}</p>
                <p><strong>Население:</strong> {planet.population}</p>
                <p><strong>Гравитация:</strong> {planet.gravity}</p>
                <p><strong>Диаметр:</strong> {planet.diameter} км</p>
            </div>

            <h2>Жители планеты</h2>

            {residents.length === 0 ? (
                <p>Информация о жителях отсутствует.</p>
            ) : (
                <div className="resident-list">
                    {residents.map((person) => {
                        const id = person.url
                            .split("/")
                            .filter(Boolean)
                            .pop();

                        return (
                            <Link
                                key={id}
                                to={`/person/${id}`}
                                state={{
                                    person: person,
                                    planetName: planet.name
                                }}
                                className="resident-card"
                            >
                                {person.name}
                                <span>Подробнее →</span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default PlanetDetails;