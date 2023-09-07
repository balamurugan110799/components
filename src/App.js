import logo from './logo.svg';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';
import Card from './components/pages/Card';
import "./components/style/style.css"
import Testimonial from './components/pages/Testimonial';
import ImageCard from './components/pages/ImageCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/imagecard" element={<ImageCard/>} />

       
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
