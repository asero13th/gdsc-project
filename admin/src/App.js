import './App.css';
import UpdateProjects from './components/poject/UpdateProjects';
import { createBrowserHistory } from 'history';
import Unauthorized from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from './pages/Signin';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Project from "./components/poject/Projects";
import CreateProject from './components/poject/CreateProject';
import Sponsor from './components/sponsor/Sponsor';
import Header from "./components/Header";
import SponsorAdd from './components/sponsor/SponsorAdd';
import Updatesponsor from './components/sponsor/SponsorEdit';
import Team  from './components/team/Team';
import MemberUpdateForm from './components/team/UpdateTeam'; 
import MemberForm from './components/team/AddMember';
const history = createBrowserHistory();

function App() {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);

    }
  }, []);


  return (
    <div className="App className='container mx-auto max-w-7xl mt-3'">
    <Router history={history}>
      <Header />
      <Routes>
      <Route path="admin/project"  element={<Project />} />
      <Route path="/admin/project/new" element={<CreateProject  />} />
      <Route path="/admin/sponsor" element={<Sponsor  />} />
      <Route path="/admin/sponsor/new" element={<SponsorAdd  />} />
      <Route path="/admin/sponsor/edit/:id" element={<Updatesponsor />} />
      <Route path="/admin/login" element={<Login  />} />
      <Route path='/admin/project/edit/:id' element = {<UpdateProjects />} />
      <Route exact path='/admin/team/' element = {<Team />} />
      <Route exact path='/admin/member/new' element = {<MemberForm />} />
      <Route path='/admin/member/edit/:id' element = {<MemberUpdateForm />} />
      <Route path="/admin/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
