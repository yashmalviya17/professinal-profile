import React from "react";
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { Space, Tooltip } from "antd";
const SocialShare = (props) => {
  return (
    <div style={{ margin: "10px auto"}}>
      <Space size="large"> 
      <p> Share Profile : </p>
        <Tooltip placement="bottom" title="Click to Share on Facebook">
          <RiFacebookFill size="2.5rem" onClick={()=>{
              window.open(props.facebook,'_blank')
          }} color="#3b5998" />
        </Tooltip>
        <Tooltip placement="bottom" title="Click to Share on LinkedIn ">
          <RiLinkedinFill size="2.5rem" color="#00a0dc" onClick={()=>{
              window.open(props.linkedin,'_blank')
          }} />
        </Tooltip>
        <Tooltip placement="bottom" title="Click to Share on Twitter ">
          <RiTwitterFill size="2.5rem" color="#1da1f2" onClick={()=>{
              window.open(props.twitter,'_blank')
          }} />
        </Tooltip>
      </Space>
    </div>
  );
};

export default SocialShare;
