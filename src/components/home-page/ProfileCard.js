import React from "react";

const ProfileCard = ({img,firstname='not available',lastname,email='not available',details}) => {

  return (
    <div className="col-md-4 animated fadeIn">
      <div className="card">
        <div className="card-body">
          <div className="avatar">
            <img src={img} className="card-img-top" alt="" />
          </div>
          <h5 className="card-title">
            {`${firstname} ${lastname}`}
          </h5>
          <p className="card-text">
            {details}
            <br />
            <span className="phone">{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
