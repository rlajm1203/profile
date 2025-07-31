import React from 'react'

const ProjectImg = ({ project }) => {
    return (
        <img
            className="project-img"
            fetchPriority="high"
            src={`${import.meta.env.BASE_URL}${project.imageSrc}`}
            alt="project-img"
        />
    )
}

export default ProjectImg