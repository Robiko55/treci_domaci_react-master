
import './App.css';
import {Routes, Route} from 'react-router-dom'
import SneakersList from "./components/SneakersList";
import SneakersDetails from "./components/SneakersDetails";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from "./components/Favorites";
import About from "./components/About";

function App() {
  return (
    <div className="App">
<Navbar />
      <Routes>
        <Route path="/" element={<SneakersList />}/>
        <Route path="/sneakers/:id" element={<SneakersDetails />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path = "/about" element={<About/>}/>
      </Routes>
  <Footer/>


    </div>
  );
}

export default App;
