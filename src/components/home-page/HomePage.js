import React,{useContext} from "react";
import { DataContextApi } from "../global-components/ContextApi";
import {Spin} from 'antd'
import FirstSection from "./FirstSection";
import "./homepage-style.css";
import ProfileSection from "./ProfileSection";
const HomePage = () => {
    const {loading} = useContext(DataContextApi)
  return (
    <>
    <FirstSection/>
   {loading ? <Spin size='large' /> : <ProfileSection/>} 
    </>
  );
};

export default HomePage;
