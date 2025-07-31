import React from 'react'
import ProjectName from './ProjectName'
import ProjectInfo from './ProjectInfo'
import ProjectSummary from './ProjectSummary'
import ProjectSocial from './ProjectSocial'
import ProjectImg from './ProjectImg'

const ProjectBody = ({ project }) => {
    return (
        <div className="project-body">
            <ProjectImg project={project}/>
            <div className="project-explain-container">
                <ProjectName project={project} />
                <ProjectSummary project={project} />
                <ProjectInfo project={project} />
                <ProjectSocial project={project} />
            </div>
        </div>
    )
}

export default ProjectBody