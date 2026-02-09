import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-purple-400">
          Prisca.dev
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden bg-black">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;



// import { Link, useLocation } from "react-router-dom";
// function Navbar() {
//     const location = useLocation();
//     const linkClass = (path:string)=>
//         `hover:text-purple-400 transition ${
//             location.pathname === path ? "text-purple-400" : "text-gray-300"
//         }`
//     return(
//         <nav className="bg-black text-white p-4 fixed w-full top-0 z-0 shadow-md">
//             <div className="flex justify-between items-center max-w-6xl mx-auto">
//                 <h1 className="text-sm text-purple-400 font-bold">Prisca</h1>
//                 <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
//                   <li><Link to="/" className={linkClass("/")}>Home</Link></li>
//                   <li><Link to="projects" className={linkClass("/projects")}>Projects</Link></li>
//                   <li><Link to="about" className={linkClass("/about")}>About</Link></li>
//                   <li><Link to="contact" className={linkClass("/contact")}>Contact</Link></li>
//                 </ul>
//              </div> 

//         </nav>
//     );
// };

// export default Navbar;