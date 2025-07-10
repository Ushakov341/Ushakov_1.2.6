import { userProfile } from './UserProfile';
function Contact (props) {
        return(
        <>
        <div className="card">
          <div className="card-header">Контактная информация</div>
          <div className="card-content">Email: {props.email}</div>
          <div className="card-content">Телефон: {props.phone}</div>

        </div>
        </>
        )
        }
export default Contact;