import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Prisca. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/priscamuli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <FaGithub size={20} /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/prisca-muli-583b922b9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>

          <a
            href="mailto:priscakamanthe31@gmail.com"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <MdEmail size={20} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
