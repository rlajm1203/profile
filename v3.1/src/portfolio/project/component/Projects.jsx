import React from 'react'
import Project from '@/portfolio/project/component/Project'
import { useProjects } from '../../../contexts/ProjectProvider'
import ProjectHeader from './header/ProjectHeader';
import ProjectDetail from './ProjectDetail';
import Slide from '@/reveal/component/Slide'

const Projects = ({ dataTransition }) => {
  // project.id 로 정렬
  const { projects } = useProjects();
  const sortedProjects = Array.from(projects.sort((a,b)=>a.id-b.id));

  return sortedProjects.map((project) => {
    return (
      <>
        <Slide>
          <Slide id="projects" className="semi-container projects" dataTransition={dataTransition}>
            <Project project={project} dataTransition={dataTransition} />
          </Slide>

          {
            project.detailDescription.map((description, idx) => {
              return (
                <Slide>
                  <ProjectDetail project={project} idx={idx} />
                </Slide>
              )
            })
          }

        </Slide>
      </>
    )
  })
}

export default Projects