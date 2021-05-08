import React from "react";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
const ProfileCard = ({
  img,
  firstname,
  lastname,
  email,
  details,
  slug
}) => {
  return (
    <Tooltip title="Click to Open Profile">
      <Link to={`/profile/${firstname}/${slug}`} >
        <div className="col-md-4 animated fadeIn">
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <img src={img} className="card-img-top" alt="" />
              </div>
              <h5 className="card-title">{`${firstname} ${lastname}`}</h5>
              <p className="card-text">
                {details}
                <br />
                <span className="phone">{email}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Tooltip>
  );
};

export default ProfileCard;
