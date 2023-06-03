import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function MemberUpdateForm() {

  const { id } = useParams()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [linkedin_url, setLinkedin_url] = useState('')
  const [github_url, setGithub_url] = useState('');
  const [member_type, setMemebr_type] = useState('')
  const [year_joined, setYearJoind] = useState(0);


  useEffect(() => {
    // Fetch member data on component mount
    axios.get(`https://gdsc-main-site.onrender.com/v1/member/${id}`)
      .then(response => {
        setName(response.data[0]?.name);
        setEmail(response.data[0]?.email);
        setPosition(response.data[0]?.position);
        setStatus(response.data[0]?.status);
        setLinkedin_url(response.data[0]?.linkedin_url);
        setGithub_url(response.data[0]?.github_url);
        setMemebr_type(response.data[0]?.member_type);
        setYearJoind(response.data[0]?.year_joined)
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  

  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`https://gdsc-main-site.onrender.com/v1/member/${id}`, 
    {
        name,
        email,
        position,
        status,
        linkedin_url,
        github_url,
        member_type,
        year_joined
    },
    {headers: {  Authorization: `Bearer ${localStorage.getItem('token')}`}}  
    )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Position:
        <input type="text" name="position" value={position} onChange={(event) => setPosition(event.target.value)} />
      </label>
      <label>
        Status:
        <input type="text" name="status" value={status} onChange={(event) => setStatus(event.target.value)} />
      </label>
      <label>
        LinkedIn URL:
        <input type="url" name="linkedin_url" value={linkedin_url} onChange={(event) => setLinkedin_url(event.target.value)} />
      </label>
      <label>
        GitHub URL:
        <input type="url" name="github_url" value={github_url} onChange={(event) => setGithub_url(event.target.value)}/>
      </label>
      <label>
        Member Type:
        <input type="text" name="member_type" value={member_type} onChange={(event) => setMemebr_type(event.target.value)} />
      </label>
      <label>
        Year Joined:
        <input type="number" name="year_joined" value={year_joined} onChange={(event) => setYearJoind(event.target.value)} />
      </label>
      <button type="submit">Update Member</button>
    </form>
  );
}

export default MemberUpdateForm;