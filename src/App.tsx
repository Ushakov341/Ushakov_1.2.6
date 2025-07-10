import defaultUserPhoto from './assets/photo-default.svg';
import './App.css';
import { userProfile } from './components/UserProfile';

function App() {
  return (
    <>
      <div className="description">
        <img className="photo--default" src={defaultUserPhoto} />
        <h4>{userProfile.userName}</h4>
        <p>{userProfile.userDescription}</p>
      </div>
      <div className="main">
        <div className="card">
          <div className="card-header">Контактная информация</div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-header">Местоположение</div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-header">Интересы</div>
          <div className="card-content"></div>
        </div>
      </div>
    </>
  );
}

export default App;
