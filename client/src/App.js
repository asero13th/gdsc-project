import './App.css';
import Projects from "./components/project/Projects"
import ProjectDetail from './components/project/ProjectDetail';
import Header from './components/navbar/Header';
import Footer from './components/footer/Footer';
import Team from './components/teams/Team';
function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
