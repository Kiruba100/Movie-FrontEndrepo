import React from 'react'
import { Link } from 'react-router-dom';

const Add =()=>{
      return (
        <>
        <div className='add1'>
        <img src="1.png" alt="logo"/>
        <h1>Add Details</h1>
        <center>
        <form>
        <input type="number"
        placeholder='Enter id' Id='passengerId'/>
        <br>
        </br>
        <input type="text"
        placeholder='Enter Name' Passenger Name='passengername'/>
        <br>
        </br>
        <input type="number"
        placeholder='Ticket Class' Class='ticketclass'/>
        <br>
        </br>
        <input type="number"
        placeholder='983373722' Contact='phnum'/>
        <br>
        </br>
        <Link to="/" ><input type="submit"
        value="Submit"/></Link>
        </form>
        </center>
        </div>
        <div className='back'>
        <Link to="/"><li><button>Back</button></li></Link>
        </div></>
        
      
      )
    }
    export default Add