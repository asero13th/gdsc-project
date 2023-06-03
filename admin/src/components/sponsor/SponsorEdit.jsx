import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {  Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateSponsor = () => {
   
    const [sponsor, setSponsor] = useState(null);
    const { id } = useParams();
    const [name, setName] = useState('');
    const [sponsorLink, setSponsorLink] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleSponsorLinkChange = (event) => {
      setSponsorLink(event.target.value);
    };

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(`https://gdsc-main-site.onrender.com/v1/sponser/${id}`);
        setSponsor(result.data);
        setName(result.data.name)
        setSponsorLink(result.data?.sponser_link)
      };
     
  
      fetchData();
    
    }, [id]);

    const handleSubmit = async (event) => {
      event.preventDefault();

      try{
        const response = await axios.put(`https://gdsc-main-site.onrender.com/v1/sponser/${id}`, {
        name,
        sponser_link: sponsorLink
      },
      {headers: {  Authorization: `Bearer ${localStorage.getItem('token')}`}}
      )
      
        if (response.status === 200) {
          navigate('/admin/sponsor');
        } 
      }
      catch(error)  {
        console.log(error);
      };
    };


    if (!sponsor) {
      return <div>Loading...</div>;
    }
    


 
  return (
    <div>
        <div onSubmit={handleSubmit} className='container mx-auto max-w-5xl '>
        <div className='container mx-auto max-w-7xl border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
            <h3 className='fw-bold mt-1 text-center'> Edit sponsor</h3>
        </div>
        <Form onSubmit={handleSubmit} method='POST' action='' className='container mx-auto max-w-7xl'>
            <FloatingLabel controlId="floatingInputGrid" label="project title" className='mb-3'>
                <Form.Control className='text-sm' size="lg" type="text" placeholder="Large text" value={name} onChange={handleNameChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInputGrid" label="sponsor link" className='mb-3'>
                <Form.Control className='text-sm' size="lg" type="text" placeholder="Large text" value={sponsorLink} onChange={handleSponsorLinkChange}/>
            </FloatingLabel>
        
            

     

           
            <div>
                <br />
                <hr />
                <br />
            </div>
           
            <div className='d-flex justify-content-between cursor-pointer'>
                <div>
                  <Button  size='sm'>
                    <i class="fas fa-trash"></i> <span> remove</span>
                  </Button>
                </div>
                <div >
                <Button color='gray-400' className='mx-3' size='sm'>
                  cancel
                </Button>
                <Button type='submit' variant='success' size='sm' p-7>    
                   save changes
                </Button>
                </div>
                
            </div> 

        </Form>
        </div>
    </div>

  )
}

const Updatesponsor = () => {
  return (
    <UpdateSponsor />
  )
}


export default Updatesponsor