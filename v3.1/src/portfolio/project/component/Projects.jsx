import React from 'react'
import Project from '@/portfolio/project/component/Project'
import {PROJECTS} from '@/portfolio/project/constants/projects.js'

const Projects = ({dataTransition}) => {
    return PROJECTS.map((project) => {
      return (
        <section>
          <div className="container">
            <Project project={project} dataTransition={dataTransition}/>
          </div>
        </section>
      )
    })
}

export default Projects