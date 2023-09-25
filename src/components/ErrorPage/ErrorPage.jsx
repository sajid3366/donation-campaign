import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>data is not here</h1>
            <NavLink to="/"><button className="bg-green-200">Go to home</button></NavLink>
        </div>
    );
};

export default ErrorPage;