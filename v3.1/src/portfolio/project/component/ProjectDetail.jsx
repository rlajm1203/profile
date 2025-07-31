import React from 'react'
import ProjectHeader from './header/ProjectHeader'
import ProjectName from './body/ProjectName'

const ProjectDetail = ({project}) => {
  return (
    <div className='container'>
        <ProjectHeader project={project}/>
        <ProjectName project={project}/>
    </div>
  )
}

export default ProjectDetail