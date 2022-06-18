import * as API from './services/launches';
import { useEffect, useState } from 'react';
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
            
          ))
        }
      </ul>

    </>
  )
}

export default App
