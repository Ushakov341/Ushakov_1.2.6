import React from "react";

type UserProfile = {
  country: string;
  city: string;
  address?: string;
};
function Location (props: UserProfile) {
        return(
        <>
        <div className="card">
          <div className="card-header">Местоположение</div>
          <div className="card-content">Страна: {props.country}</div>
          <div className="card-content">Город: {props.city}</div>
          <div className="card-content">
            Адрес: {props.address ? props.address : 'Не указано'}</div>
        </div>
        </>
        )
        }
export default Location;