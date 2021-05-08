import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Spin } from "antd";
import { DataContextApi } from "../global-components/ContextApi";
import "./single-profile.css";
import Container from "../global-components/Container";
import SocialShare from "./SocialShare";

const SingleProfile = () => {
  const { slug } = useParams();
  const [profile, setProfile] = useState({});
  const { imageurl } = useContext(DataContextApi);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/professional-profile?slug=${slug}`)
      .then((res) => {
        if (res.data.status === 200) {
          setProfile(res.data.data);
          setLoading(false);
        }
      })
      .catch((err) => alert("Data not Found or Something went Wrong"));
  }, [slug]);

 
  return (
    <>
      {loading ? (
        <div style={{ marginTop: "120px", textAlign: "center" }}>
          {" "}
          <Spin size="large" />{" "}
        </div>
      ) : (
        <section className="main-sp">
          <h1>Details about</h1>
          <Container>
            <Row gutter={20}>
              <Col sm={24} xs={24} md={24} xl={12} lg={12}>
                <img
                  src={`${imageurl}${profile.professional.profile_pic}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </Col>
              <Col sm={24} xs={24} md={24} xl={12} lg={12}>
                <div className="sp-basic">
                  <p>
                    <span>Name: </span>
                    {`${profile.professional.first_name} ${profile.professional.last_name} `}
                  </p>
                  <p>
                    <span> Address: </span> {profile.address}
                  </p>
                  <p>
                    <span>Email: </span> {profile.professional.email}
                  </p>
                  <p>
                    <span>Phone:</span> {profile.professional.phone}
                  </p>
                  <p>
                    <span>title:</span>
                    {profile.title}
                  </p>
                  <SocialShare
                    name={`${profile.professional.first_name} ${profile.professional.last_name} `}
                    description={profile.background}
                    imageurl ={`${imageurl}${profile.professional.profile_pic}`}
                  />
                </div>
              </Col>
            </Row>
            <hr />
            <p>
              <span>methodology:</span>
              {profile.methodology}
            </p>
            <p>
              <span>background:</span>
              {profile.background}
            </p>
          </Container>
        </section>
      )}
    </>
  );
};

export default SingleProfile;
