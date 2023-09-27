import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="my-12 ">
            <div className="flex-col justify-center items-center bg-green-300 max-w-xl mx-auto h-[60vh] rounded-lg px-8 py-14 text-center">
                <h1 className="text-black text-3xl mt-14">Sorry!! You are in the wrong place..</h1>
                <NavLink to="/"><button className="bg-gray-300 text-xl font-semibold px-4 py-2 rounded-lg mt-5">Go to home</button></NavLink>
            </div>

        </div>
    );
};

export default ErrorPage;