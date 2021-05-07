import React, { useState, useContext, useEffect } from "react";
import { DataContextApi } from "../global-components/ContextApi";
import ProfileCard from "./ProfileCard";
import Container from "../global-components/Container";
import SearchProfile from "./SearchhProfile";
import LoadReset from "./LoadReset";

const ProfileSection = () => {
  const { profileData, imageurl } = useContext(DataContextApi);
  const [data, setData] = useState([]);
  const [sliceValue, setSliceValue] = useState(9);

  useEffect(() => {
    setData(profileData);
  }, [profileData]);

  const handleSearch = (input) => {
    const filtered = data.filter((data) => {
      return data.professional.first_name
        .toLowerCase()
        .includes(input.toLowerCase());
    });
    setData(filtered);
  };

  const cardComponents = data.slice(0, sliceValue).map((data, i) => {
    return (
      <ProfileCard
        key={i + data.slug}
        img={`${imageurl}${data.professional.profile_pic}`}
        firstname={data.professional.first_name}
        lastname={data.professional.last_name}
        email={data.professional.email}
        details={data.address}
        slug={data.slug}
      />
    );
  });

  return (
    <section className="section-card">
      <Container>
        <div className="section-title">
          <h1 className="section-card-h1"> List of Profile's </h1>
          <span className="section-span-search">
            <SearchProfile
              handleSearch={handleSearch}
              profileData={profileData}
              setData={setData}
              setSliceValue={setSliceValue}
            />
          </span>
        </div>
        <div className="row">{cardComponents}</div>
      </Container>
      <LoadReset setSliceValue={setSliceValue} sliceValue={sliceValue} />
    </section>
  );
};

export default ProfileSection;
