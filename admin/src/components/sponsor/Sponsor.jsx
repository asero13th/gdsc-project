import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
const SponsorContext = createContext();

const SponsorProvider = ({ children }) => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://gdsc-main-site.onrender.com/v1/sponser');
      setSponsors(result.data);
    };

    fetchData();
  }, []);

  return (
    <SponsorContext.Provider value={{ sponsors }}>
      {children}
    </SponsorContext.Provider>
  );
};

const SponsorList = () => {
  const { sponsors } = useContext(SponsorContext);
  if (!sponsors){
    return <div>loading...</div>
  }
  return (  
    <div className='container mx-auto max-w-7xl mt-3'>
      <div className='border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
        <h4 className='fw-bold mt-2'>Sponsors</h4>
        <div>
            <Button variant="primary" size='sm' href='/sponsor/new'>
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
                <div className="ms-2 me-auto mt-2">
                    {sponsor.name}
                </div>
                <Button>
                    <a href={`/sponsor/edit/${sponsor.id}`}><i class="fas fa-arrow-right"></i></a>
                </Button>
            </ListGroup.Item>
          </div>
      ))}
     </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <SponsorProvider>
      <SponsorList />
    </SponsorProvider>
  );
};

export default Sponsor;


