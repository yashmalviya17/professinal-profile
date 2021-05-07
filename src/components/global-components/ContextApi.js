import React, { useEffect, useState,createContext } from "react";
import axios from "axios";


export const DataContextApi = createContext()
 

const ContextApi = (props) => {
    
  const [profileData, setProfileData] = useState([]); //To store data from api
  const [loading, setLoading] = useState(false); //for showing loading until api request is completed

  useEffect(() => {
      setLoading(true)
    axios.get("/search").then((res) => {
      if (res.status === 200) {
        setProfileData(res.data.data);
        setLoading(false)
      }
    }).catch(err => console.log(err),setLoading(false))
  }, []);

 const value = {loading,setLoading,profileData,setProfileData}

  return <DataContextApi.Provider value={value} >{props.children}</DataContextApi.Provider>
};

export default ContextApi;
