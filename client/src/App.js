import './App.css';
import Projects from "./components/project/Projects"
import ProjectDetail from './components/project/ProjectDetail';
import Header from './components/navbar/Header';
import Footer from './components/footer/Footer';
import Team from './components/teams/Team';
import PageNotFound from './components/pagenotfound/PageNotFound';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path='/projects' exact Component={Projects} />         
          <Route path='/team' exact Component={Team} />
          <Route path='/project/:id' Component={ProjectDetail} />
          <Route path='/:id'  Component={PageNotFound}/>
        </Routes>
     
       </Router>
      <Footer />
    </div>
  );
}

export default App;
