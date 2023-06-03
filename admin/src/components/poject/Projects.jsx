import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, Route, Switch } from 'react-router-dom';




const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://gdsc-main-site.onrender.com/v1/project');
      setProjects(result.data);
    };

    fetchData();
  }, []);

  
  if (!projects){
    return <div>loading...</div>
  }

  return (
    <div className='container mx-auto max-w-7xl mt-3'>
      <div className='border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
        <h4 className='fw-bold mt-2'>Projects</h4>
        <div>
            <Button variant="primary" size='sm' href='/admin/project/new'>
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
                <Button size='sm'>
                    <a size="sm"  href={`/admin/project/edit/${project.id}`}><i class="fas fa-arrow-right"></i></a>
                </Button>
            </ListGroup.Item>
          </div>
      ))}
     </div>
    </div>
  );
};

const Project = () => {
  const navigate = useNavigate();
  console.log(localStorage.getItem('isAdmin'));


  if (!(localStorage.getItem('isAdmin'))) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        <p>You must be logged in as an admin to access this page.</p>
        <button onClick={() => navigate('/admin/login')}>Login</button>
      </div>
    );
  }
  
  return (
      <ProjectList />
  );
};

export default Project;


