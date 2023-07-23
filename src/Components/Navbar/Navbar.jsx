import { NavLink } from "react-router-dom";

function Navbar() {
    const activeStyle = 'bg-emerald-300 rounded-md p-2';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-4">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                       PeLists
                    </NavLink>
                </li>
                <li className="rounded-md p-2 hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-100">
                    <NavLink 
                        to='/'
                        className={ ({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="rounded-md p-2 hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-100">
                    <NavLink 
                        to='/my-lists'
                        className={ ({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Mis PeLists
                    </NavLink>
                </li>
                <li className="rounded-md p-2 hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-100">
                    <NavLink 
                        to='/create-list'
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={ ({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Crear PeList
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-4">
                <li className="text-black/60">
                    correoquemado@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={ ({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Mi cuenta
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };