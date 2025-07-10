import { userProfile } from './components/UserProfile';
function Interests () {
        return(
        <>
        <div className="card">
          <div className="card-header">Интересы</div>
          <div className="card-content">
            <ul>
              {userProfile.interests.map((interest)=>(
                return <li>{interest}</li>
              )
              
              )}
            </ul>
          </div>
        </div>
        </>
        )
        }
export default Interests;