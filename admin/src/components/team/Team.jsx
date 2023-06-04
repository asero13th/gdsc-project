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
    <div className="container mx-auto  top-0 right-10 absolute h-screen w-2/3">
    <div className="flex justify-center">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-center">Members</h1>
        <div className="mb-4 w-full">
          <select
            id="year"
            className = 'border border-gray-400 p-2 w-full px-4 py-2 rounded-md'
            value={year}
            onChange={e => setYear(e.target.value)}
          >
            <option value={2020}>2020 / 2021</option>
            <option value={2021}>2021 / 2022</option>
            <option value={2022}>2022 / 2023</option>
          </select>
        </div>
        {Object.keys(groupedMembers).map(position => (
          <div key={position} className="mb-4">
            <h2 className="text-xl font-bold mb-2">{position}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupedMembers[position].map(member => (
                <div key={member.id} className="border p-4 rounded-md">
                  <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                  <Button size='sm' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href={`/admin/member/edit/${member.id}`}><i class="fas fa-arrow-right"></i></a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Members;
