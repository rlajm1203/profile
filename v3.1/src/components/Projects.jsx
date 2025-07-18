import React from 'react'
import Project from '@/components/Project'
import {PROJECTS} from '@/constants/projects.js'

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