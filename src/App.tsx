import defaultUserPhoto from './assets/photo-default.svg';
import './App.css';
import { userProfile } from './components/UserProfile';
import Contact from './components/Contact';
import Location from './components/Location';
import Interests from './components/Interests';

function App() {
  return (
    <>
      <div className="description">
        <img   className="photo--default"
  src={userProfile.protoUrl ? userProfile.protoUrl : defaultUserPhoto}
  alt="User photo" />
        <h4>{userProfile.userName}</h4>
        <p>{userProfile.userDescription}</p>
      </div>
      <div className="main">
        <Contact 
          email={userProfile.contactInfo.email}
          phone={userProfile.contactInfo.phone}
        />
        <Location 
          country={userProfile.location.country}
          city={userProfile.location.city}
          address={userProfile.location.address}
        />
        <Interests 
          interests={userProfile.interests}
        />
      </div>
    </>
  );
}

export default App;
