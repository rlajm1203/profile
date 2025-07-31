// src/components/Projects.jsx
import React from 'react';
import ProjectHeader from './header/ProjectHeader';
import ProjectBody from './body/ProjectBody';

export default function Project({ project, dataTransition }) {
  return (
    <div className='container'>
        <h2 className="title bebas-neue mb-6">projects</h2>
        <div className="!flex !flex-col !gap-8">
          {
            <React.Fragment key={project.id}>
              <ProjectHeader project={project} />
              <ProjectBody project={project}/>
            </React.Fragment>
          }
        </div>
    </div>
  );
}