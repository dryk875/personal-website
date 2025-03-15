import './style/Projects.css';
import './style/ProjectCard.css'

function ProjectCard({ name, description, link }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={link}>Learn more</a>
        </div>
    );
}

function Projects() {
    return(
        <>
            <h1>Projects</h1>

            <div className="cards">
                <ProjectCard name="Project 1" description="Description of project 1" link="" />
                <ProjectCard name="Project 2" description="Description of project 2" link="" />
                <ProjectCard name="Project 3" description="Description of project 3" link="" />
            </div>
        </>
    )
}

export default Projects;