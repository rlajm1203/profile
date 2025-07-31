import React from 'react'
import ProjectHeader from './header/ProjectHeader'
import ProjectName from './body/ProjectName'

const ProjectDetail = ({ project, idx }) => {

  const updatedProject = { ...project };
  updatedProject.title = updatedProject.detailDescription[idx].title;

  const detail = updatedProject.detailDescription;
  return (
    <div className='container !flex !flex-col justify-between gap-[3dvw]'>
      <ProjectHeader project={project} />
      <div className='flex flex-col gap-[1dvw]'>
        <div className="project-name !text-[1.5dvw] !font-light">{updatedProject.title}</div>
        <div className='!text-[1dvw] !font-light !font-[Manrope] whitespace-pre-line'>{detail[idx].description}</div>
      </div>
      {detail[idx].img ? <div className='font-light'>img 있음</div> : ""}
    </div>
  )
}

export default ProjectDetail