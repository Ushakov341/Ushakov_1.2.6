import { userProfile } from './UserProfile';
function Contact () {
        return(
        <>
        <div className="card">
          <div className="card-header">Контактная информация</div>
          <div className="card-content">Email: {userProfile.contactInfo.email}</div>
          <div className="card-content">Телефон: {userProfile.contactInfo.phone}</div>

        </div>
        </>
        )
        }
export default Contact;