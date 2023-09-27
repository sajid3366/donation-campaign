import { NavLink } from "react-router-dom";

const Header = () => {
    return (

        <nav className=" lg:flex justify-between items-center">
            <div className="flex justify-center">
                <img className=" h-[70px] " src="/image/Logo.png" alt="" />
            </div>
            <ul className="flex justify-center  mt-8 lg:mt-0 gap-x-6">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                        Home
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to="/donation" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                    }>
                        Donation
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/statistics" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>

    );
};

export default Header;