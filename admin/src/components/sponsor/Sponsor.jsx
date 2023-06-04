import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';




const SponsorList = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://gdsc-main-site.onrender.com/v1/sponser');
      setSponsors(result.data);
    };

    fetchData();
  }, []);

  if (!sponsors){
    return <div>loading...</div>
  }
  return (  
    <div className='container mx-auto max-w-7xl mt-3 top-0 right-10 absolute h-screen w-2/3'>
      <div className='border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
        <h4 className='fw-bold mt-2'>Sponsors</h4>
        <div>
            <Button className='bg-blue-500 border-blue-500 px-4' variant="primary" size='sm' href='/admin/sponsor/new'>
                Add+
            </Button>
        </div>
      </div>
     <div>
     {sponsors.map(sponsor => (   
          <div className='mb-1'>
                <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start border border-solid border-gray-400 p-2 rounded"
                >
                <div className="ms-2 me-auto mt-2 ">
                    {sponsor.name}
                </div>
                <Button size='sm' className='bg-blue-500 border-blue-500 px-4'>
                    <a href={`/admin/sponsor/edit/${sponsor.id}`}><i class="fas fa-arrow-right"></i></a>
                </Button>
            </ListGroup.Item>
          </div>
      ))}
     </div>
    </div>
  );
};

const Sponsor = () => {

  const navigate = useNavigate();
  if (!(localStorage.getItem('isAdmin'))) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        <p>You must be logged in as an admin to access this page.</p>
      </div>
    );
  }
  
  return (   
      <SponsorList />
  );
};

export default Sponsor;


