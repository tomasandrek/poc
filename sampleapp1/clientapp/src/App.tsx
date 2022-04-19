import React from 'react';
import './App.css';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navigation from './components/Navigation';
import { About } from './components/About';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App =  () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
          <Routes>
              <Route path='/about' element={<About/>}/>
              <Route path="/" element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
