

const NavBar = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Products</a></li>
                   <li><a>Accessories</a></li>
                   <li><a>Brand</a></li>
                   <li><a>Category</a></li>
                    <li><a>About</a></li>
                   <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            
            <div className="navbar-end">
                <div className="navbar-center ml-0 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Accessories</a></li>
                        <li><a>Brand</a></li>
                        <li><a>Category</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn">Get started</a>
            </div>
        </div>
        
        // <div className="navbar">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost normal-case text-4xl fw-semi-bold text-green-700">Motor Brand</a>
        //     </div>
        //     <div className="flex-none ">
        //         <ul className="menu menu-horizontal px-1 text-gray-500">
        //             <li><a>Products</a></li>
        //             <li><a>Accessories</a></li>
        //             <li><a>Brand</a></li>
        //             <li><a>Category</a></li>
        //             <li><a>About</a></li>
        //             <li><a>Contact</a></li>
                    
        //         </ul>
        //     </div>
        // </div>
    );
};

export default NavBar;