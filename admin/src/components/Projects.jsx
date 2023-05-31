import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
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
    <div className='container mx-auto max-w-7xl mt-3'>
      <div className='border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
        <h4 className='fw-bold mt-2'>Projects</h4>
        <div>
            <Button variant="primary" size='sm' href='/project/new'>
                Add+
            </Button>
        </div>
      </div>
     <div>
     {projects.map(project => (   
          <div className='mb-1'>
                <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start border border-solid border-gray-400 p-2 rounded"
                >
                <div className="ms-2 me-auto mt-2">
                    {project.name}
                </div>
                <Button>
                    <a href={`/project/edit/${project.id}`}><i class="fas fa-arrow-right"></i></a>
                </Button>
            </ListGroup.Item>
          </div>
      ))}
     </div>
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


