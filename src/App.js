import React from 'react'
import ContextApi from './contextapi/ContextApi'
import Router from './route/Router'

const App = () => {
  return (
   <ContextApi>
     <Router/>
   </ContextApi>
  )
}

export default App
