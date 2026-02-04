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
                        Hi I'm Prisca a web developer. I love building modrn, responsive, and interactive web applications that combine clean design wiyh smooth user experiences.
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
        </section>
    );
};
export default About;