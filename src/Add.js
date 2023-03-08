import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


 function Add() {
  const[id1,setId]=useState(0);
  const[movie,setMovie]=useState("");
  const[yea,setyear]=useState("");
  const[imd,setimdb]=useState("");
  const[coll,setColl]=useState("");
  const[budjet,setbudjet]=useState("");
  const SubmitHandler =(e)=>{
    e.preventDefault();
    const data={
        id:id1,
        budget:budjet,
        collection:coll,
        imdb:imd,
        movie:movie,
        year:yea
    };
    axios.post("http://localhost:8080/addDetails",data)
  }
      return (
        <>
        <h1>Enter your favourite movie details</h1>
        <div className='add1'>
        <h1><center>Add Details</center></h1>
        <img src="99.png" alt="logo"/>
        <center>
        <form >
        <input type="tel"
        placeholder='Enter id ' Id='passengerId' onChange={ (e)=> setId(e.target.value)}/>
        <br/>
        <input type="text"
        placeholder='Movie' Id='passengerId' onChange={ (e)=> setMovie(e.target.value)}/>
        <br/>
        <input type="text"
        placeholder='Year' Id='passengerId' onChange={ (e)=> setyear(e.target.value)}/>
        <br/>
        <input type="text"
        placeholder='imdb' Id='passengerId' onChange={ (e)=> setimdb(e.target.value)}/>
        <br/>
        <input type="text"
        placeholder='Collection' Id='passengerId' onChange={ (e)=> setColl(e.target.value)}/>
        <br/>
        <input type="text"
        placeholder='Budjet' Id='passengerId' onChange={ (e)=> setbudjet(e.target.value)}/>
        <br/>
        <button type="submit" onClick={SubmitHandler}>Submit</button>
        </form>
        </center>
        </div>
        <div className='back'>
        <Link to="/"><li><button>Back</button></li></Link>
        </div></>
        
      
      )
    }
    export default Add