import React, { useState, useContext, useEffect } from "react";
import { DataContextApi } from "../global-components/ContextApi";
import ProfileCard from "./ProfileCard";
import { Button, Space } from "antd";
import Container from "../global-components/Container";

const ProfileSection = () => {
  const { profileData, imageurl } = useContext(DataContextApi);
  const [data, setData] = useState([]);
  const [sliceValue, setSliceValue] = useState(9);
  useEffect(() => {
    setData(profileData);
  }, [profileData]);

  const cardComponents = data.slice(0, sliceValue).map((data, i) => {
    return (
      <ProfileCard
        key={i + data.slug}
        img={`${imageurl}${data.professional.profile_pic}`}
        firstname={data.professional.first_name}
        lastname={data.professional.last_name}
        email={data.professional.email}
        details={data.address}
      />
    );
  });

  return (
    <section className='section-card' > 
      <Container>
      <div  > <h1> List of Profile's </h1>  </div>
        <div className="row">{cardComponents}</div>
      </Container>
      <div className="button-div">
        <Space size='large' >
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => {
              setSliceValue(sliceValue + 9);
            }}
          >
            Load More
          </Button>
          <Button
            type="primary"
            shape="round"
            danger
            size="large"
            disabled={sliceValue === 9 ? true : false}
            onClick={() => {
              setSliceValue(9);
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    </section>
  );
};

export default ProfileSection;
