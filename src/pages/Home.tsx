import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home(){
   return ( 
   <section className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16">
  {/* Text */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="max-w-xl text-center md:text-left"
  >
    <h1 className="text-4xl font-semibold mb-2">I'm Prisca</h1>
    <h2 className="text-6xl font-bold mb-4">
      <span className="text-purple-300">Web</span>{" "}
      <span className="text-white">Developer</span>
    </h2>
    <p className="text-lg text-gray-200 mb-6">
      I'm a web developer based in Kenya. I help you build beautiful websites your users will love.
    </p>
    <div className="flex gap-4 justify-center md:justify-start">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/contact" className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition">
          Get In Touch
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/projects" className="bg-gray-200 text-black px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition">
          Browse Projects
        </Link>
      </motion.div>
    </div>
  </motion.div>

  {/* Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="mt-8 md:mt-0"
  >
    <img
      src="/prisca.jpeg"
      alt="Prisca"
      className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-purple-300 object-cover"
    />
  </motion.div>
</section>

  ); 
};
export default Home;