import ProjectCard from "../components/ProjectCard";
function Projects(){
    const projectList = [
        {title: "Ecommerce Site", description:"Javascrip + Django app", link:"https://josmayawebsite.onrender.com/"},
        {title: "Portfolio", description:"React-based personal site", link:"https://prisca-space.vercel.app/"}
    ];
    return(
        <section className="min-h-screen min-w-screen bg-black text-white py-16 px-8">
            <h2 className="text-3xl font-bold mb-8 text-centre text-purple-400">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((p, i) =>(
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
};
export default Projects;