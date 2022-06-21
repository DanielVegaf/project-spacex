import { Routes, Route } from 'react-router-dom';

import { LaunchList } from './components/launchList/LaunchList';
import { LaunchDetails } from './components/launchDetails/LaunchDetails';
import { RocketDetails } from './components/rocketDetails/RocketDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  )
}

export default App
