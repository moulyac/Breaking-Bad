import React, { useEffect, useState } from 'react'
import './characterDetails.css'
import axios from 'axios'

const CharacterDetails = (props)=>{
    const { id }= props.match.params
    const [details, setDetails] = useState([])
    
    useEffect(()=>{
        axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
          .then((response)=>{
              const [data] = response.data
              //console.log(data)
              setDetails(data)
          })
    },[])
    return <div>
        <h2>{details.name}</h2>
        <div class='detailsContainer'>
            <div class='details'>
                <h3><strong>NICKNAME :</strong>  {details.nickname} </h3>
                <h3><strong>DOB :</strong>  {details.birthday} </h3>
                <h3><strong>CATEGORY :</strong>  {details.category} </h3>
                <h3><strong>OCCUPATION :</strong>  {details.occupation} </h3>
                <h3><strong>STATUS :</strong>  {details.status} </h3>
            
                <h3><strong>Appearences :</strong>  
                    <ul>
                        { details.category&& details.category.includes('Breaking Bad') && <h3>Breaking Bad</h3>}
                        {
                            details.appearance && details.appearance.map((epi)=>{
                                return <li>Episode {epi}</li>
                            })
                        }
                    </ul>
                    <ul>
                        { details.category && details.category.includes('Better Call Saul') && <h3>Better Call Saul</h3>}
                        {
                            details.better_call_saul_appearance &&
                            details.better_call_saul_appearance.map((epi)=>{
                                return <li>Episode {epi}</li>
                            })
                        }  
                    </ul> 
                </h3>
            </div>
            <div class='image'>
                <img src={details.img} alt='not found' style={{height:'50vh', width:'20vw'}} />
                <h3>Portrayed by : {details.portrayed}</h3>
            </div>
        </div>
    </div>
}

export default CharacterDetails