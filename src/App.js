import logo from './logo.svg';
import './App.css';
import './assets/styles/NavBar.css';
import './assets/styles/Footer.css';
import './assets/styles/Banner.css';
import './assets/styles/Projects.css';
import './assets/styles/Contact.css';
import './assets/styles/Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
