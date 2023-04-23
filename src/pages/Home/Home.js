import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    return (
        <main>
            <Link to="/users" state={{ from: location }}>
                Home
            </Link>
        </main>
    );
};

export default Home;

