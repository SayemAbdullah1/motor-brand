

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-4xl fw-semi-bold text-green-700">Motor Brand</a>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal px-1 text-gray-500">
                    <li><a>Products</a></li>
                    <li><a>Accessories</a></li>
                    <li><a>Brand</a></li>
                    <li><a>Category</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default NavBar;