import * as API from './services/launches';
import { useEffect, useState } from 'react';

import {BsFillCalendarEventFill} from 'react-icons/bs';
import Logo from './assest/logo-spacex.png';

function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <img src={Logo} alt="logo spacex" width={300} />

      <h1>Launches</h1>

      <ul>
        {
          launches.map((launch, rocket_number) => (
            <li key={rocket_number}>
              <p>Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})</p>
              <span>
                {launch.launch_success ? 
                  <p style={{color: 'green'}}>Success</p> 
                  : <p style={{color: 'red'}}>Failure</p> }
              </span>
              <p>
                <BsFillCalendarEventFill /> <span>{launch.launch_date_local.split("T")[0]}</span>
              </p>
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default App
