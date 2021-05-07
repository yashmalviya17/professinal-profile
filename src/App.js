import React from 'react'
import ContextApi from './components/global-components/ContextApi'
import Router from './components/global-components/Router'
import './components/global-components/global-style.css'
const App = () => {
  return (
   <ContextApi>
     <Router/>
   </ContextApi>
  )
}

export default App
