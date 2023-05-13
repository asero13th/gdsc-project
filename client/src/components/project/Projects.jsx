import React from 'react'
import Project from "./Project"
import { fakedata } from './fakedata'


const Projects = () => {
  return (
    <div className='project-holder container row'>
      {
        fakedata.map((item) =>{
          return (
            <Project title = {item.projectTitle} description = {item.description} />
          )
        })
      }
    </div>
    
  )
}

export default Projects