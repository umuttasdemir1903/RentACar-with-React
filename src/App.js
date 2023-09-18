import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Car from './pages/Car'
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<Car/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
      </Router>
   
    </div>
  );
}

export default App;
