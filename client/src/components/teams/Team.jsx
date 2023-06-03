import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import { Accordion } from 'react-bootstrap';
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://gdsc-main-site.onrender.com/v1/member')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};




const CardList = () => {
  const data = useContext(DataContext);
 
  const groupedData = data.reduce((acc, member) => {
    const startYear = member.year_joined;
    if (!acc[startYear]) {
      acc[startYear] = [];
    }
    acc[startYear].push(member);
    return acc;
  }, {});

  return (
    <div className='container'>
    <div className='mb-4'>
       <h5 className='text-left team-header'>Meet our team</h5>
       <p npmclassName='text-left text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quidem vel aperiam animi cum, minima reiciendis 
         amet numquam, deleniti iusto rerum velit nostrum aliquid eveniet sequi optio et fuga? Quod!</p>
     </div>
      <div >
      {Object.entries(groupedData).map(([startYear, members]) => (
        <Accordion defaultActiveKey="0" className=''>
        <Accordion.Item  className='mt-3 mx-5 '>
        <Accordion.Header><span>{startYear}</span>/<span>{parseInt(startYear) + 1}  year</span></Accordion.Header>
          <Accordion.Body className=' core-team-member-card  flex flex-row flex-wrap'>
            {
              members.map((member) =>{
                return(
                  <div className='flex flex-col sm:flex-row'>
                    <MemberCard key={member.id} member = { member }/>
                  </div>
                      )
                  })
                }
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
     
      ))}
    </div>
    </div>
  )
};

const Team = () => {
  return (
    <DataProvider>
      <CardList />
    </DataProvider>
  );
};

export default Team;