import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    const linkClass = (path:string)=>
        `hover:text-purple-400 transition ${
            location.pathname === path ? "text-purple-400" : "text-gray-300"
        }`
    return(
        <nav className="bg-black text-white p-4 fixed w-full top-0 z-0 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-sm text-purple-400 font-bold">Prisca</h1>
                <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <li><Link to="/" className={linkClass("/")}>Home</Link></li>
                  <li><Link to="projects" className={linkClass("/projects")}>Projects</Link></li>
                  <li><Link to="about" className={linkClass("/about")}>About</Link></li>
                  <li><Link to="contact" className={linkClass("/contact")}>Contact</Link></li>
                </ul>
             </div> 

        </nav>
    );
};

export default Navbar;