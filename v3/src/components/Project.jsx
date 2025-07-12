// src/components/Projects.jsx
import React from 'react';

export default function Project({ project }) {
  return (
    <section id="projects" className="semi-container projects">
      <h2 className="title bebas-neue mb-6">projects</h2>
      <div className="!flex !flex-col !gap-8">
        {
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
                src={`${import.meta.env.BASE_URL}${project.imageSrc}`}
                alt="project-img"
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
                <div className="project-social flex gap-6 text-sm">
                  <div
                    className="project-view text-[#D3E97A] border-b border-[#D3E97A] hover:text-[#576031] hover:border-[#576031]"
                    onClick={() => window.open(project.viewLink)}
                  >
                    WEB VIEW
                  </div>
                  <div
                    className="project-github text-[#D3E97A] border-b border-[#D3E97A] hover:text-[#576031]"
                    onClick={() => window.open(project.githubLink)}
                  >
                    PROJECT GITHUB
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    </section>
  );
}