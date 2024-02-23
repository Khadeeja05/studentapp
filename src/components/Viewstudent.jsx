import React,{useState,useEffect} from 'react'
import{Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material'
import axios from 'axios';

const Viewstudent = () => {
    var[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/students")
        .then((response)=>{
        console.log(response)
        setData(response.data);
    
    })
    .catch((error)=>{console.log(error)})
},[])
  return (
    <div>
        
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Name</TableCell>
                        <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Age</TableCell>
                        <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Department</TableCell>
                        
                    </TableRow>
                    </TableHead>
                <TableBody>
                  {data.map((value,index)=>{
                    return (
                      <TableRow>
                      <TableCell> {value.name}</TableCell>
                      <TableCell>{value.age}</TableCell>
                      <TableCell>{value.department}</TableCell>
                      </TableRow>
                      
                    )
                  })}

                </TableBody>
                </Table></TableContainer>
    </div>
  )
}

export default Viewstudent