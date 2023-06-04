import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {  Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';



  

const Updateprojects = () => {

  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [contributors, setContributors] = useState(null);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get(`https://gdsc-main-site.onrender.com/v1/project/${id}`);
      setProject(result.data);
      setName(result.data.name)
      setDescription(result.data.description)
      setProjectLink(result.data?.project_link)
      setStartDate(result.data.start_date)
      setEndDate(result.data?.end_date)
      setStatus(result.data.status)
    };
    
    const fetchContributors = async () => {
      const response = await fetch(`https://gdsc-main-site.onrender.com/v1/project/contributors/${id}`);
      const data = await response.json();
      setContributors(data);
    };

    fetchData();
    fetchContributors();

  }, [id]);
  
   
    
    

   
    const handleSubmit = async (event) => {

      event.preventDefault();
      try {
        const response = await axios.put(`https://gdsc-main-site.onrender.com/v1/project/${id}`, {
          name,
          description,
          status,
          project_link: projectLink,
          start_date: startDate,
          end_date: endDate,
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );

        console.log(response.data)
        console.log(response.status)
        if (response.status === 200) {
          setDescription('')
          setName('')
          setStartDate('')
          setStatus('')
          navigate('/admin/project');

      } else {
        setError('An error occurred, please try again later');
  }
      } catch (err) {
        console.error(err, error);
      }

    };
    
   
    if  (project === {}){
      return <div>loading...</div>
    }
   
    
  return (
    <div className='mb-5 top-0 right-10 absolute h-screen w-2/3'>
        <div  className='container mx-auto max-w-5xl'>
        <div className='container mx-auto max-w-7xl border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
            <h3 className='fw-bold mt-1 text-center'> update project</h3>
        </div>
        <Form onSubmit={handleSubmit}  method='POST' action='' className='container mx-auto max-w-7xl mb-5'>
            <FloatingLabel controlId="floatingInputGrid" label="project title" className='mb-3'>
                <Form.Control className='text-sm' size="lg" type="text" placeholder="Large text" value={name} onChange={(e) => setName(e.target.value)}/>
            </FloatingLabel>
            
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} /> 
            </Form.Group>
            
            <label className='p-3 border mx-2 mt-2 mb-3'>
              Start Date:
              <input className='p2 border mx-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label className='p-3 border mx-2 mt-2 mb-3' >
              End Date:
              <input className='p2 border mx-2' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
            
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}  aria-label="Default select example" className='mb-3'>
                <option>select project type</option>
                <option value="planning">planning</option>
                <option value="in progress">inprogress</option>
                <option value="completed">completed</option>
            </Form.Select>

            <FloatingLabel controlId="floatingInputGrid" label="project link" className='mb-3'>
                <Form.Control size="lg" type="text" placeholder="Large text" value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
            </FloatingLabel>
            <br />

            <div className='d-flex justify-content-between cursor-pointer'>
                
                <div >
                <Button type='submit' size='sm' variant='success'>
                   save changes
                </Button>
                </div> 
            </div> 
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
                                  <Button size='sm'>
                                      <a href={`/admin/member/edit/${contributer.id}`}><i class="fas fa-arrow-right"></i></a>
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
        </div>
    </div>

  )
}

export default Updateprojects;