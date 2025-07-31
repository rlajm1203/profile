const ProjectSummary = ({project}) => {
    return (
        <div className="project-detail whitespace-pre-line leading-none">
            {project.detail}
        </div>
    )
}

export default ProjectSummary