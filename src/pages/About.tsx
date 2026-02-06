import { motion } from "framer-motion"; 
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";
function About(){
    return(
        <section className="min-h-screen min-w-screen bg-black text-white py-16 px-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">About Me</h2>
            <div className="max-w-4xl flex flex-col md:flex-row items-center gap-12">
                {/* Profile image */}
                <img src="/prisca.jpeg" alt="prisca" className="rounded-full border-4 border-purple-400 w-48 h-48 object-cover" />
                {/*Bio*/}
                <div>
                    <p className="text-lg text-gray-300 mb-6">
                        Hi I'm Prisca a web developer. I love building modern, responsive, and interactive web applications that combine clean design with smooth user experiences.
                    </p>
                    <p className="text-lg text-gray-300 mb-6">
                        My journey started with backend deployment (Django + PostgreSQL), and now I'm focused on frontend polish with React, Vite, Typescript, Tailwindcss, and Framer Motion.I thrive on learning new tools and pushing projects to production.
                    </p>
                    {/*Skills*/}
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">Skills</h3>
                    <ul className="grid grid-cols-2 gap-4 text-gray-400">
                        <li>React</li>
                        <li>Django</li>
                        <li>MySQL</li>
                        <li>TailwindCSS</li>
                        <li>Cloud Deployment (Render, Railway, Vercel)</li>
                    </ul>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="flex gap-6" >
              <a href="https://github.com/priscamuli" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition" >
                <FaGithub size={20} /> GitHub
              </a>

              <a href="https://linkedin.com/in/prisca-muli-583b922b9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600 transition" >
                <FaLinkedin size={20} /> LinkedIn
              </a>

              <a href="mailto:priscakamanthe31@gmail.com" className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition" >
                <MdEmail size={20} /> Email
              </a>
            </motion.div>
        </section>
    );
};
export default About;