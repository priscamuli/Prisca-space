import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App(){
  return(
    <Router>
      <Navbar />
      <div className="flex grow pt-16">
        <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
        <Footer />
      </div>  
    </Router>
  );
};

export default App;
