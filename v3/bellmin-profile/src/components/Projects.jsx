// src/components/Projects.jsx
import React from 'react';
import { PROJECTS } from '@/constants/projects';

export default function Projects() {
  return (
    <section id="projects" className="semi-container">
      <h2 className="title bebas-neue mb-6">projects</h2>
      <div className="flex flex-col gap-8">
        {PROJECTS.map(project => (
          <React.Fragment key={project.id}>
            <div className="project-header">
              <div className="project-header-title bebas-neue">{project.title},</div>
              <div className="project-header-semi-title bebas-neue">
                {project.semiTitle}
              </div>
            </div>
            <div className="project-body">
              <img
                className="project-img"
                fetchPriority="high"
                src={project.imageSrc}
                alt="EEOS"
              />
              <div className="project-explain-container">
                <div className="project-name">{project.title}</div>
                <div className="project-detail whitespace-pre-line leading-none">
                  {project.detail}
                </div>
                <div className="project-info">
                  <div className="project-info-left">project info</div>
                  <div className="project-info-right"></div>
                </div>
                <div className="project-info">
                  <div className="project-info-left">year</div>
                  <div className="project-info-right">{project.year}</div>
                </div>
                <div className="project-info">
                  <div className="project-info-left">Role</div>
                  <div className="project-info-right">{project.role}</div>
                </div>
                <div className="project-info">
                  <div className="project-info-right  whitespace-pre-line">
                    {project.description}
                  </div>
                </div>
                <div className="project-social">
                  <div className="project-view">
                    <img
                      fetchPriority="high"
                      src="static/project/view_project.svg"
                      alt="eeos-view-project"
                      onClick={()=>window.open(project.viewLink)}
                    />
                  </div>
                  <div className="project-github">
                    <img
                      fetchPriority="high"
                      src="static/project/project_github.svg"
                      alt="eeos-github"
                      onClick={()=>window.open(project.githubLink)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}