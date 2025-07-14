import React from "react";
import defaultUserPhoto from '../assets/photo-default.svg';

type Description = {
description: string;
userName: string;
protoUrl?: string;
openForWork: boolean;
}

function Description (props: Description) {
    return (
    <>      
    <div className="description">
    <img   className="photo--default"
        src={props.protoUrl ? props.protoUrl : defaultUserPhoto}
        alt="User photo" />
    <h4>{props.userName}</h4>
    <p>{props.description}</p>
    <p>{props.openForWork ? 'В поиске работы' : ''}</p>
  </div>
  </>
  )
}

export default Description;