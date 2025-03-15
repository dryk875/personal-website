import './style/Projects.css';
import './style/ProjectCard.css'

function ProjectCard({ name, img, link }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <a href={link}>Learn more</a>
        </div>
    );
}

function Projects() {
    return(
        <>
            <h1>Projects</h1>

            <div className="cards">
                <ProjectCard name="HashAudit" link="" />
                <ProjectCard name="ICMon" link="" />
            </div>
        </>
    )
}

export default Projects;