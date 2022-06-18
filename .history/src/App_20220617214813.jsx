import * as API from './services/launches';
import { useEffect, useState } from 'react';
import Logo from './assest/logo-spacex.png';
import LaunchItem from './components/LaunchItem';

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
            <LaunchItem key={rocket_number} {...props}/>
          ))
        }
      </ul>

    </>
  )
}

export default App
