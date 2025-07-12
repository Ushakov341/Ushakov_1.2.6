import React from 'react';

type Interests = {
  interesets?: string[];
}

function Interests(props) {
  return (
    <div className="card">
      <div className="card-header">Интересы:</div>
      <div className="card-content">
        {props.interests && props.interests.length > 0 ? (
          <ul>
            {props.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        ) : (
          <p>Не указано</p>
        )}
      </div>
    </div>
  );
}
export default Interests;