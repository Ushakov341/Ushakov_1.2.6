import { userProfile } from './components/UserProfile';
function Interests (props) {
        return(
        <>
        <div className="card">
          <div className="card-header">Интересы: </div>
          <div className="card-content">
          
          {props.interests.map((interest)=>{
            return <><li>{interest}</li></>
          })}
          
          </div>
        </div>
        </>
        )
        }
export default Interests;