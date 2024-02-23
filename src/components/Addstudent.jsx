import React,{useState} from 'react'
import {Button,TextField,Typography,data} from '@mui/material'
import axios from 'axios';

const Addstudent = () => {
  
    
    var[data,setData]=useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    const submit=()=>{
      axios.post("http://localhost:4000/students",{
        name:data.name,
        age:data.age,
        department:data.department
    })
    .then(()=>{
      alert("new entry created successfully");
    })
    .catch(()=>{
      alert("error saving data");
    });
      }
    
  return (
    <div>
        <br /><br />
        <Typography variant='h4'>Student Details</Typography>
        <br />
        <TextField variant="outlined" name="name" onChange={inputHandler} label="name"/>
        <br /><br />
        <TextField variant="outlined" name="age" onChange={inputHandler} label="age"/>
        <br /><br />
        <TextField variant="outlined" name="department" onChange={inputHandler} label="department"/>
        <br /><br />
        <Button variant="outlined" onClick={submit}>Submit</Button>
    </div>
  )
}


        
       
    

  


export default Addstudent