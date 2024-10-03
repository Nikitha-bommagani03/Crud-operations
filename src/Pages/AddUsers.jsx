import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    let [state,setState]=useState({username:"",email:""})
    let navigate=useNavigate()
    let change=(e)=>{
           setState({...state,[e.target.name]:e.target.value})
    }
    let adduser=()=>{
        axios.post("http://localhost:2050/users",state).then(x=>{
            navigate("/")
        }).catch(()=>console.log("failed to fetch"))
    }
  return (
    <div className='container'>
        <h1 className='head'>Add a new user</h1>
        <input type='text' placeholder='username' name='username' value={state.username} onChange={change} className='input'/>
        <br />
        <input type="email" placeholder='email address' name='email' value={state.email} onChange={change} className='input'/>
        <br />
        <button onClick={adduser} className='add'>Add user</button>
    </div>
  )
}

export default Add
