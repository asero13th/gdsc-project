import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function CreateProject() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');


  const navigate = useNavigate();
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://gdsc-main-site.onrender.com/v1/project', {
        name,
        description,
        status,
        start_date: startDate,
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );

      if (response.status === 200) {
              setDescription('')
              setName('')
              setStartDate('')
              setStatus('')
              navigate('/admin/project');
          } 
          
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container mx-auto max-w-7xl mt-3'>
        <FloatingLabel controlId="floatingInputGrid" label="name" className='mb-3 mt-3'>
                 <Form.Control required className='text-sm' size="lg" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
       </FloatingLabel>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" value={description} onChange={(event) => setDescription(event.target.value)}>
                <Form.Control required  name='description' placeholder='project description' as="textarea" rows={3} /> 
      </Form.Group>
    
    
      <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}  aria-label="Default select example" className='mb-3'>
                <option>select project type</option>
                <option value="planning">planning</option>
                <option value="in progress">inprogress</option>
                <option value="completed">completed</option>
      </Form.Select>
      <label>
        Start Date:
        <input required type="date" className='text-sm form-input w-full border p-3 float-left ml-4 mt-2  mb-3' size="lg" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      </label>
      <button type="submit" className='btn btn-success btn-block '>Create Project</button>
    </form>
  );
}

export default CreateProject;