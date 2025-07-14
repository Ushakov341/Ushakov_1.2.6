import React from 'react';

type Contact = {
  contactInfo: string;
  email: string;
  phone?: string;
};

function Contact (props: Contact) {
        return(
        <>
        <div className="card">
          <div className="card-header">Контактная информация</div>
          <div className="card-content">Email: {props.email}</div>
          <div className="card-content">Телефон: {props.phone ? props.phone : 'Не указан'}</div>

        </div>
        </>
        )
        }
export default Contact;