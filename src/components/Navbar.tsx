import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const linkClass = (path:string)=>
        `hover:text-purple-400 transition ${
            location.pathname === path ? "text-purple-400" : "text-gray-300"
        }`
    return(
        <nav className="bg-black text-white p-4 fixed w-full top-0 z-0 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-xl font-bold">Prisca</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>

                <ul className="hidden md:flex gap-6">
                  <li><Link to="/" className={linkClass("/")}>Home</Link></li>
                  <li><Link to="projects" className={linkClass("/projects")}>Projects</Link></li>
                  <li><Link to="about" className={linkClass("/about")}>about</Link></li>
                  <li><Link to="contact" className={linkClass("/contact")}>Contact</Link></li>
                </ul>
             </div> 
             {isOpen &&(
                <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden bg-black">
                  <li><Link to="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link></li>
                  <li><Link to="/projects" className={linkClass("/projects")} onClick={() => setIsOpen(false)}>Projects</Link></li>
                  <li><Link to="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>About</Link></li>
                  <li><Link to="/contact" className={linkClass("/contact")} onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
             )}

        </nav>
    );
};

export default Navbar;