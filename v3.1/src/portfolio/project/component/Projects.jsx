import React from 'react'
import Project from '@/project/component/Project'
import {PROJECTS} from '@/project/constants/projects.js'

const Projects = () => {
    return PROJECTS.map((project) => {
      return (
        <section>
          <div className="container">
            <Project project={project} />
          </div>
        </section>
      )
    })
}

export default Projects