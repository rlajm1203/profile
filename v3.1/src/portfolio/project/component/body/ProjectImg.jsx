import React from 'react'

const ProjectImg = ({ project }) => {
    return (
        <div className='bg-[#1A1A1A] rounded-md flex justify-center'>
            <img
                className="project-img"
                fetchPriority="high"
                src={`${import.meta.env.BASE_URL}${project.imageSrc}`}
                alt="project-img"
            />
        </div>
    )
}

export default ProjectImg