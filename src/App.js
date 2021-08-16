import React from 'react'
import { Route, Link } from 'react-router-dom'
import CharacterNames from './components/characterNames'
import CharacterDetails from './components/CharacterDetails'

const App = ()=>{
  return<div>
     <h1><Link to={'/'}>Breaking Bad</Link></h1>
     
    <Route path={'/'} component={CharacterNames} exact={true}/> 
    <Route path={'/character/:id'} component={CharacterDetails}/>
    
  </div>  
}

export default App