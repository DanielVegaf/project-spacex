import * as API from './services/launches';

import Logo from './assest/logo-spacex.png';
import { useEffect, useState } from 'react';

function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  },[]);

  return (
    <>
      <img src={Logo} alt="logo spacex" width={300}/>

    <h1>Launches</h1>
    
    <ul>
      {
        launches.map((launch) => (
          <li key={launch.flight_number}>
            {mission_name}
          </li>
        ))
      }
    </ul>

    </>
  )
}

export default App
