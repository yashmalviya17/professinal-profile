import React, { useState } from "react";
import { Space, Input, Button } from "antd";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
const SearchProfile = (props) => {
  const [input, setInput] = useState("");
  const { handleSearch, setSliceValue, setData, profileData } = props;

  return (
    <Space>
      <Input
        placeholder="Search Profile by first-name"
        size="middle"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          handleSearch(input);
        }}
      >
        <HiOutlineSearch />
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => {
          setData(profileData);
          setSliceValue(9);
          setInput("");
        }}
      >
        <HiOutlineX />
      </Button>
    </Space>
  );
};

export default SearchProfile;
