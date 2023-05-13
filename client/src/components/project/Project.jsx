import React from 'react'

const Project = ({title, description}) => {
  return (
    <div>
      <div className='project'>
       <div className='project-image'>
           <div className='title-and-link'>
           <h6>{title}</h6>
            <a href='https://www.somewhere.com'>View project<i class="fa-thin fa-arrow-right"></i></a>
           </div>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat error aliquam molestias eligendi 
         praesentium
       </p>
     </div>
    </div>
  )
}

export default Project