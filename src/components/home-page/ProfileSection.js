import React, { useState, useContext, useEffect } from "react";
import { DataContextApi } from "../global-components/ContextApi";
import ProfileCard from "./ProfileCard";
import { Button, Space, Input } from "antd";
import Container from "../global-components/Container";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

const ProfileSection = () => {
  const { profileData, imageurl } = useContext(DataContextApi);
  const [data, setData] = useState([]);
  const [sliceValue, setSliceValue] = useState(9);
  const [input, setInput] = useState("");
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
      />
    );
  });

  return (
    <section className="section-card">
      <Container>
        <div className='section-title' >
          <h1 className="section-card-h1"> List of Profile's </h1>
          <span className='section-span-search'>
            <Space>
              <Input
              placeholder='Search Profile by first-name'
              size='middle'
                onChange={(e) => {
                  setInput(e.target.value);
                }}   />
              <Button
              type='primary'
                onClick={() => {
                  handleSearch(input);
                }} >
                <HiOutlineSearch />
              </Button> 
              <Button
              type='primary'
              danger
                onClick={() => {
                  setData(profileData)
                  setSliceValue(9)
                }} >
                <HiOutlineX />
              </Button>
            </Space>
          </span>
        </div>
        <div className="row">{cardComponents}</div>
      </Container>
      <div className="button-div">
        <Space size="large">
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
