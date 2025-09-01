import React from 'react'
import ReactMarkDown from 'react-markdown'
import ProjectHeader from './header/ProjectHeader'
import ProjectName from './body/ProjectName'


const ProjectDetail = ({ project, idx }) => {

  const updatedProject = { ...project };
  updatedProject.title = updatedProject.detailDescription[idx].title;

  const detail = updatedProject.detailDescription;
  return (
    <div className='container !flex !flex-col justify-between gap-[3dvw]'>
      <ProjectHeader project={project} />
      <div className='flex flex-row gap-[1dvw]'>
        <div className='flex flex-col gap-[1dvw]'>
          <div className="project-name !text-[1.5dvw] !font-light">{updatedProject.title}</div>
          <div className='!text-[1dvw] !font-light !font-[Manrope] whitespace-pre-line'>
            {detail[idx].description}
          </div>
        </div>
        <div>
          {detail[idx].imageSrc ?
            <img className='w-[50dvw]' src={`${import.meta.env.BASE_URL}${detail[idx].imageSrc}`}></img>
            : ""}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail