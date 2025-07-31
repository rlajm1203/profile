import React, { createContext, useContext } from 'react'
import {PROJECTS} from '@/portfolio/project/constants/projects.js'

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

export const ProjectProvider = ({children}) => {
  return (
    <ProjectContext.Provider value={{projects : PROJECTS}}>
      {children}
    </ProjectContext.Provider>
  )
}