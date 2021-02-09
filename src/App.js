import './App.css';

import ProfilePhoto from "./Components/Profile/ProfilePhoto"
import FullName from "./Components/Profile/FullName"
import Address from "./Components/Profile/Address"

function App() {
  return (
    <div className="App">

      <ProfilePhoto/>

      <div className="Personal-info">
      <FullName/>

      <Address/>
      </div>

    </div>
  );
}

export default App;
