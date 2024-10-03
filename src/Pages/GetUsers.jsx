import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/Style.css" 


const GetUsers = () => {
    let [state,setState]=useState([])
    let [keys,setKeys]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:2020/users").then(x=>{
            setState(x.data)
            setKeys(Object.keys(x.data[0]).splice(0,4))
        }
        ).catch(()=>console.log("failed to fetch")
        )
    },[state])    
    let remove=(x)=>{
        axios.delete("http://localhost:2020/users/"+x).then(x=>navigate("/")).catch(()=>console.log("failed to fetch"))
    }
  return (
    <div className='body'>
     <table border={1}>
        <caption>
            <strong>CRUD OPERATIONS</strong><br />
            <button onClick={()=>navigate("/add")} className='button'>ADD+</button>
        </caption>
        <thead>
            <tr>
                {keys.map((x,y)=><th key={y}>{x}</th>)}
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            {state.map((x,y)=>{
                return(
                 <tr key={y}>
                 <td>{x.id}</td>
                 <td>{x.name}</td>
                 <td>{x.username}</td>
                 <td>{x.email}</td>
                 <td className='dis'>
                 <Link to={`/edit/${x.id}`}><button className='button'>EDIT</button></Link>
                 <button onClick={()=>remove(x.id)} className='button'>DELETE</button>
                 </td>
                 </tr>)
            })}
        </tbody>
     </table>
     </div>
  )
}

export default GetUsers
