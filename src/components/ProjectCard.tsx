import React from "react";
import { motion } from "framer-motion";
interface ProjectProps{
    title: string;
    description: string;
    link: string;
}
const ProjectCard: React.FC<ProjectProps> = ({ title, description, link}) => {
    return(
        <motion.div initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="bg-gray-900 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">View Project</a>
        </motion.div>
    );
};
export default ProjectCard;