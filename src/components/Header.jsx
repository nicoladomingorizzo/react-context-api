import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1 className="text-center mt-5 mb-3">AZIENDA CINESE CHE SFRUTTA I BAMBINI PER FARE VESTITI</h1>
            <div className="bg-black">

                <ul className="nav justify-content-around mt-5 mb-3 py-5">
                    <li className="nav-item">
                        <NavLink className="nav-link link-underline link-underline-opacity-0 text-white" to="/" aria-current="page">Homepage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link link-underline link-underline-opacity-0 text-white" to="/products">Prodotti</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link link-underline link-underline-opacity-0 text-white" to="/about">Chi Siamo</NavLink>
                    </li>
                </ul>
            </div>
        </header>

    )
}