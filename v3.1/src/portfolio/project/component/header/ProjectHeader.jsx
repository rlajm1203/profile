import React from 'react'

const ProjectHeader = ({project}) => {
    return (
        <div>
            <div className="project-header">
                <div className="project-header-title bebas-neue">{project.title},</div>
                <div className="project-header-semi-title bebas-neue">
                    {project.semiTitle}
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader