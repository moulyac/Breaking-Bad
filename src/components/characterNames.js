import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './charactercards.css'

const CharacterNames = ()=>{
    const [charactersDetails, setCharactersDetails] = useState([])
    useEffect(()=>{
      axios.get('https://www.breakingbadapi.com/api/characters')
          .then((response)=>{
              const data = response.data
              //console.log(data)
              setCharactersDetails(data)
          })
    },[])
    
    return<div class='namesCardContainer'>
        {
          charactersDetails.map((character,i)=>{
            return <div key={character.char_id} class='nameCard'><Link to={`/character/${character.char_id}`}>
                  {character.name}
                <div>
                  <img src={character.img} alt='not found' style={{height:'18rem', width:'15rem',padding:'1rem'}}/>
                </div>
                </Link>
              </div>
          })
        }
        
    </div>
}
export default CharacterNames