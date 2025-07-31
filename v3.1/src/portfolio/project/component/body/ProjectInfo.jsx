const ProjectInfo = ({project}) => {
    return (
        <>
            <div className="project-info">
                <div className="project-info-left">project info</div>
                <div className="project-info-right"></div>
            </div>
            <div className="project-info">
                <div className="project-info-left">year</div>
                <div className="project-info-right">{project.year}</div>
            </div>
            <div className="project-info">
                <div className="project-info-left">Role</div>
                <div className="project-info-right">{project.role}</div>
            </div>
            <div className="project-info">
                <div className="project-info-right  whitespace-pre-line">
                    {project.description}
                </div>
            </div>
        </>
    )
}

export default ProjectInfo