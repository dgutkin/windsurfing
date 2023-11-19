
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Reservations from './Reservations.js';
import DirectionsHours from './DirectionsHours.js';

function App() {

  //const HashRouter = ReactRouterDOM.HashRouter;
  //const Route = ReactRouterDOM.Route;

  return (
      
      <Router>
        <div>
          <Nav/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/reservations" element={<Reservations/>}/>
            <Route path="/directions-hours" element={<DirectionsHours/>}/>
          </Routes>
        </div>
        
      </Router>

  );
    
      {/* Home - image of the beach and a button for the current wind conditions
      Reservation - form for reserving a lesson or gear
      Directions & Hours - page with text including the full address and hours */}
    
}

export default App;
