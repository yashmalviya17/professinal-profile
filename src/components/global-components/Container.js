import React from 'react'
import './global-style.css'
const Container = (props) => {
    return (
        <div className='container-div' >
           {props.children} 
        </div>
    )
}

export default Container
