import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUsers = () => {
    let [state,setState]=useState({username:"",email:""})
    let navigate=useNavigate()
    let change=(e)=>{
           setState({...state,[e.target.name]:e.target.value})
    }
    let {id}=useParams();
    useEffect((id)=>{
        axios.get("http://localhost:2050/users/"+id).then(x=>setState(x.data)).catch(()=>console.log("failed to fetch")
        )
    },[])
    let update=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:2050/users/"+id,state).then(x=>navigate("/")).catch(()=>console.log("failed to fetch"))
    }
  return (
    <div className='container'>
        <h1 className='head'>Edit your profile</h1>
        <input type='text' placeholder='username' name='username' value={state.username} onChange={change} className='input'/>
        <br />
        <input type="email" placeholder='email address' name='email' value={state.email} onChange={change} className='input'/>
        <br />
        <button onClick={update} className='but'>Update</button>
    </div>
  )
}

export default UpdateUsers

