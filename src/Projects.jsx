import './style/Projects.css';
import './style/ProjectCard.css'
import { useTranslation } from 'react-i18next';

function ProjectCard({ name, img, link }) {
    return (
        <a href={link}>
        <div className="card">
            <h2>{name}</h2>
        </div>
        </a>
    );
}

function Projects() {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('Projects')}</h1>

            <div className="cards">
                <ProjectCard name="HashAudit" link="" />
                <ProjectCard name="ICMon" link="" />
            </div>
        </>
    )
}

export default Projects;