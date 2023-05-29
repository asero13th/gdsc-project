import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import Project from "./Project"
const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://gdsc-main-site.onrender.com/v1/project');
      setProjects(result.data);
    };

    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  if (!projects){
    return <div>loading...</div>
  }
  return (
    <div className='project-holder container row'>
      {projects.map(project => (   
          <Project id={project.id} title = {project.name} description={project.description} url = {project.image_url}/>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <ProjectProvider>
      <ProjectList />
    </ProjectProvider>
  );
};

export default App;


// import React from 'react'
// import Project from "./Project"
// import { fakedata } from './fakedata'


// const Projects = () => {
//   return (
//     <div className='project-holder container row'>
//       {
//         fakedata.map((item) =>{
//           return (
//             <Project title = {item.projectTitle} description = {item.description} />
//           )
//         })
//       }
//     </div>
    
//   )
// }

// export default Projects