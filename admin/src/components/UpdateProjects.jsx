import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {  Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState(null);
    const [contributors, setContributors] = useState(null);

    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(`https://gdsc-main-site.onrender.com/v1/project/${id}`);
        setProject(result.data);
      };
      
      const fetchContributors = async () => {
        const response = await fetch(`https://gdsc-main-site.onrender.com/v1/project/contributors/${id}`);
        const data = await response.json();
        setContributors(data);
      };
  
      fetchData();
      fetchContributors();
    }, [id]);
  
    return (
      <ProjectContext.Provider value={{ project, contributors }}>
        {children}
      </ProjectContext.Provider>
    );
  };
  

const Updateprojects = () => {
    const [images, setImages] = useState([]);
    const { project, contributors } = useContext(ProjectContext);

    console.log(contributors)
    if (!project) {
      return <div>Loading...</div>;
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const filteredFiles = files.filter((file) => file.type.startsWith('image/'));
        setImages([...images, ...filteredFiles]);
    };

    const handleFileInput = (e) => {
        const files = Array.from(e.target.files);
        const filteredFiles = files.filter((file) => file.type.startsWith('image/'));
        setImages([...images, ...filteredFiles]);
    };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle image upload logic here
  };
  return (
    <div>
        
        <div onSubmit={handleSubmit} className='container mx-auto max-w-5xl'>
        <div className='container mx-auto max-w-7xl border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
            <h3 className='fw-bold mt-1 text-center'> update project</h3>
        </div>
        <Form method='POST' action='' className='container mx-auto max-w-7xl'>
            <FloatingLabel controlId="floatingInputGrid" label="project title" className='mb-3'>
                <Form.Control className='text-sm' size="lg" type="text" placeholder="Large text" value={project.name}/>
            </FloatingLabel>
            
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} value={project.description} /> 
            </Form.Group>
            

            
            <Form.Select aria-label="Default select example" className='mb-3'>
                <option>select project type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <FloatingLabel controlId="floatingInputGrid" label="project link" className='mb-3'>
                <Form.Control size="lg" type="text" placeholder="Large text" value={project.project_link} />
            </FloatingLabel>
            <br />

            <Form className='mb-3'>
            <Form.Group>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInput}
              />
              <Form.Text className="text-muted mb-2">
                Or drag and drop images here
              </Form.Text>
            </Form.Group>
            <div
              className="dropzone p-20  border border-solid border-gray-400 mb-3"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              {images.map((image, index) => (
                <div key={index} className="image-preview">
                  <img src={URL.createObjectURL(image)} alt="" />
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
                <Button className='btn-success btn-block mb-3'>upload</Button>
            </Form>
            <div>
                <br />
                <hr />
                <br />
            </div>
            <div>
              <h3 className='text-left text-muted'>Contributors:</h3>
              <div className='row contributors'>
              {
                    contributors ? 
                    <div className='contributors mt-3 mb-3'>
                    <div className='row contributors'>
                        {
                            contributors.map((contributer) => {
                                return (
                                  <div className='mb-1'>
                                  <ListGroup.Item
                                  as="li"
                                  className="d-flex justify-content-between align-items-start border border-solid border-gray-400 p-2 rounded"
                                  >
                                  <div className="ms-2 me-auto mt-2">
                                      {contributer.name}
                                  </div>
                                  <Button>
                                      <a href={`/member/edit/${contributer.id}`}><i class="fas fa-arrow-right"></i></a>
                                  </Button>
                              </ListGroup.Item>
                            </div>  
                                )
                            })
                        }
                    </div>
                
                </div> : <div>Loading...</div>
                }
            
                    </div>
            </div>
            <div className='d-flex justify-content-between cursor-pointer'>
                <div>
                  <Button>
                    <i class="fas fa-trash"></i><span>remove</span>
                  </Button>
                </div>
                <div >
                <Button color='gray-400' className='mx-3'>
                  cancel
                </Button>
                <Button variant='success'>
                   save changes
                </Button>
                </div>
                
            </div> 

        </Form>
        </div>
    </div>

  )
}

const UpdateProjects = () => {
  return (
        <ProjectProvider>
            <Updateprojects />
        </ProjectProvider>
  )
}


export default UpdateProjects