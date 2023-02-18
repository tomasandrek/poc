import React from 'react';
import './App.css';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navigation from './components/Navigation';
import { About } from './components/About';
import { Home } from './components/Home';
import Profile from './components/auth/Profile';
import Secured from './components/Secured';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth0ProviderWithHistory from './components/auth/Auth0ProviderWithHistory';
import Loading from './components/auth/Loading';
import { useAuth0 } from '@auth0/auth0-react';

const App =  () => {

  /*const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }*/

  return (
    <div className="App">
        <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Navigation/>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/secured' element={<Secured/>}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    </div>
  );
}

export default App;
