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
        launches.map((launch, rocket_number) => (
          <li key={rocket_number}>
            {launch.mission_name}
            ({launch.launch_year})
          </li>
        ))
      }
    </ul>

    </>
  )
}

export default App
