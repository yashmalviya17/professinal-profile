import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const SingleProfile = () => {
    const {slug} = useParams()
    useEffect(()=>{
      axios.get(`/`)
    })
    return (
        <div>
            
        </div>
    )
}

export default SingleProfile
