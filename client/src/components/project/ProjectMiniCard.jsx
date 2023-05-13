import React from 'react'
import projectImage from "../../assets/project-image.jpg";
const ProjectMiniCard = () => {
  return (
    <div className='project-Mini-Card'>
           <div className='container'>
              <img src={projectImage} alt='project-photos'/>
           </div>
    </div>
  )
}

export default ProjectMiniCard;