type userProfile = {
  location: string;
  userName: string;
};

import { userProfile } from './UserProfile';
function Location (props) {
        return(
        <>
        <div className="card">
          <div className="card-header">Местоположение</div>
          <div className="card-content">Страна: {props.country}</div>
          <div className="card-content">Город: {props.city}</div>
          <div className="card-content">Адрес: {props.address}</div>
        </div>
        </>
        )
        }
export default Location;