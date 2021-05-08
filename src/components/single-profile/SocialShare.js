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
        url={`https://dev.perfectprof.com/storage/app/${props.imageurl}`}
        quote={`Info about Professor ${props.name} DESCRIPTION: ${props.description}`}
        hashtag="#professionaprofile"
      >
        <RiFacebookFill size="2.5rem" />
      </FacebookShareButton>
      <TwitterShareButton
        url={`https://dev.perfectprof.com/storage/app/${props.imageurl.replaceAll(
          " ",
          "%"
        )}`}
        title={`Info about Professor ${props.name} 
								DESCRIPTION: ${props.description.slice(0, 150) + "..."}
								`}
        hashtag="#professor"
      >
        <RiLinkedinFill size="2.5rem" />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`https://dev.perfectprof.com/storage/app/${props.imageurl}`}
        title={`Info about Professor ${props.name}`}
        summary={`DESCRIPTION: ${props.description}`}
        quote={`https://dev.perfectprof.com/storage/app/${props.imageurl}`}
      >
        <RiTwitterFill size="2.5rem" />
      </LinkedinShareButton>
    </Space>
  );
};

export default SocialShare;
