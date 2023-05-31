import logo from './logo.svg';
import './App.css';
import UpdateProjects from './components/UpdateProjects';
import Projects from "./components/Projects";
import SponsorAdd from "./components/sponsor/SponsorAdd";
import SponsorEdit from './components/sponsor/SponsorEdit';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sponsor from './components/sponsor/Sponsor';
import Header from './components/Header';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
      <Route path='/project' exact Component={Projects} /> 
      <Route path='/project/edit/:id'  Component={UpdateProjects} />
      <Route path='/sponsor' exact Component={Sponsor} /> 
      <Route path='/sponsor/new' exact Component={SponsorAdd} />     
      <Route path='/sponsor/edit/:id'  Component={SponsorEdit} />  
      
      </Routes>
     </Router>
    </div>
  );
}

export default App;
