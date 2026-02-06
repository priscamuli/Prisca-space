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

        {/* Hamburger button (only visible on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span> // Close icon
          ) : (
            <span className="text-2xl">☰</span> // Hamburger icon
          )}
        </button>

        {/* Desktop menu (hidden on mobile) */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile menu (only visible when isOpen = true) */}
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
