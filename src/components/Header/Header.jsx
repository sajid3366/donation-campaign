import { NavLink } from "react-router-dom";

const Header = () => {
    return (

        <nav className="flex justify-between items-center">
            <div>
                <img className=" h-[70px]" src="../../../public/image/Logo.png" alt="" />
            </div>
            <ul className="flex gap-x-6">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline" : isPending ? "pending" : ""
                        }>
                        Home
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to="/donation" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FF444A] underline" : isPending ? "pending" : ""
                    }>
                        Donation
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/statistics" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FF444A] underline" : isPending ? "pending" : ""
                        }>
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>

    );
};

export default Header;