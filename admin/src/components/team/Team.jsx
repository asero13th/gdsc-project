import React, {useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { Button } from 'react-bootstrap';
const Members = () => {
  const [members, setMembers] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://gdsc-main-site.onrender.com/v1/member`
      );
      setMembers(result.data.filter(member => member.year_joined === parseInt(year)));
    };
    fetchData();
  }, [year]);

  const groupedMembers = members.reduce((groups, member) => {
    const position = member.position;
    if (!groups[position]) {
      groups[position] = [];
    }
    groups[position].push(member);
    return groups;
  }, {});

  return (
    <div className="">``
      <div className="flex justify-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">Members</h1>
          <div className="mb-4 w-full container">
            <select
              id="year"
              className="border border-gray-400 p-2 w-full px-4 py-2"
              value={year}
              onChange={e => setYear(e.target.value)}
            >
              <option value={2021}>2021 / 2022</option>
               <option value={2022}>2022 / 2023</option>
            </select>
          </div>
          {Object.keys(groupedMembers).map(position => (
            <div key={position} className="mb-4">
              <h2 className="text-xl font-bold mb-2">{position}</h2>
             
                  {groupedMembers[position].map(member => (
                  
                      <div key={member.id} className="border px-4 py-2 d-flex w-full justify-content-between">
                        <h4>
                        {member.name}
                        </h4>
                        <Button size='sm'>
                          <a href={`/admin/member/edit/${member.id}`}><i class="fas fa-arrow-right"></i></a>
                        </Button>
                      </div>
                      
                   
                  ))}
               
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
