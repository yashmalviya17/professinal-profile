import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { Space } from "antd";
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
const SocialShare = (props) => {
  return (
    <Space size="large">
      <FacebookShareButton
        url={`${props.imageurl}`}
        quote={`My name is ${props.name} DESCRIPTION: ${props.description}`}
        hashtag="#professionaprofile"
      >
        <RiFacebookFill size="2.5rem" color="rgb(60, 85, 152)" />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${props.imageurl.replaceAll(" ", "%")}`}
        title={`My name is ${props.name} 
								DESCRIPTION: ${props.description.slice(0, 150) + "..."}
								`}
        hashtag="#professionaprofile"
      
      >
        <RiLinkedinFill size="2.5rem" color="rgb(0, 160, 220)" />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`${props.imageurl}`}
        title={`My name is ${props.name}`}
        summary={`DESCRIPTION: ${props.description}`}
        source={`https://dev.perfectprof.com/storage/app/${props.imageurl}`}
      >
        <RiTwitterFill size="2.5rem" color="rgb(29, 161, 242)" />
      </LinkedinShareButton>
    </Space>
  );
};

export default SocialShare;
