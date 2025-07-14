import defaultUserPhoto from './assets/photo-default.svg';
import React from 'react';
import './App.css';
import { userProfile } from './components/UserProfile';
import Contact from './components/Contact';
import Location from './components/Location';
import Interests from './components/Interests';
import Description from './components/Description';

function App() {
  return (
    <>
        <Description 
        description={userProfile.userDescription}
        userName={userProfile.userName}
        protoUrl={userProfile.protoUrl}
        openForWork={userProfile.openForWork}
        />
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
