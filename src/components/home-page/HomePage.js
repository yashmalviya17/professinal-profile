import React, { useContext } from "react";
import { DataContextApi } from "../global-components/ContextApi";
import { Col, Row } from "antd";
import Container from "../global-components/Container";
import "./homepage-style.css";
import WaveSvg from "../global-components/WaveSvg";
const HomePage = () => {
  const { loading, setLoading, profileData, setProfileData } = useContext(
    DataContextApi
  );

  return (<section className='main-section-hero'>
      <div className='main-div-hero' >
          <h1>
              Professional Profile
          </h1> 
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam nihil consequatur tempore voluptates esse perspiciatis eligendi soluta aperiam voluptas, rem natus aut? Minima nesciunt temporibus obcaecati illum, officia porro.
          </p>
      </div>
  </section>
   
  );
};

export default HomePage;
