import React, { useEffect, useState } from 'react'
import './characterDetails.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    },[id])
    
    return <div>{Object.keys(details).length? 
            <div>
                <Link to='/'><i class="fa fa-arrow-left fa-1x" style={{margin:'0 1rem', fontSize:'1.4rem'}} aria-hidden="true"></i></Link>
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
                        <img src={details.img} alt='not found' style={{height:'18rem', width:'15rem'}} />
                        <h3><strong>Portrayed by :</strong> {details.portrayed}</h3>
                    </div>
                </div>
            </div>
     : null}
       
    </div>
}

export default CharacterDetails