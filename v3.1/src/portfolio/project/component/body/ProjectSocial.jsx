const ProjectSocial = ({ project }) => {
    return (
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
    )
}

export default ProjectSocial