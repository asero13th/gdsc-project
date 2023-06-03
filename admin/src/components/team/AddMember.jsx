import React, { useState } from 'react';
import axios from 'axios';

function MemberForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [memberType, setMemberType] = useState('');
  const [yearJoined, setYearJoined] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      position,
      status,
      memberType,
      yearJoined: parseInt(yearJoined),
      linkedin_url: linkedinUrl,
      github_url: githubUrl,
    };
    try {
      const response = await axios.post('https://gdsc-main-site.onrender.com/v1/member', data,
      {headers: {  Authorization: `Bearer ${localStorage.getItem('token')}`}}
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Position:
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      </label>
      <label>
        Status:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>
      <label>
        Member Type:
        <input type="text" value={memberType} onChange={(e) => setMemberType(e.target.value)} />
      </label>
      <label>
        Year Joined:
        <input type="number" value={yearJoined} onChange={(e) => setYearJoined(e.target.value)} />
      </label>
      <label>
        LinkedIn URL:
        <input type="text" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} />
      </label>
      <label>
        GitHub URL:
        <input type="text" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MemberForm;
