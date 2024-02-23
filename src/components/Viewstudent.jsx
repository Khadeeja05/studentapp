import React,{useState,useEffect} from 'react'
import{Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material'
import axios from 'axios';
import Addstudent from './Addstudent';

const Viewstudent = () => {
  var[edit,selectEdit]=useState(false);
  var[selected,setSelected]=useState({});
    var[data,setData]=useState([]);

    const deleteStudent=(id)=>{
      axios.delete("http://localhost:4000/students/"+id)
      .then(()=>{
        alert("deleted a row");
        window.location.reload();
    })
    .catch(()=>{
      alert("couldnt delete row");
    });
  }
  const editStudent=(id)=>{
    axios.get("http://localhost:4000/students/"+id)
    .then((response)=>{
      setSelected(response.data);
      selectEdit(true);
    })
    .catch(()=>{
      alert("cannot edit now")
    });
  };
    useEffect(()=>{
        axios.get("http://localhost:4000/students")
        .then((response)=>{
        
          console.log(response)
        setData(response.data);
    
    })
    .catch((error)=> console.log(error))
},[])
  return (
    <div>
        {edit ? (<Addstudent method="Put" data={{id:selected._id,name:selected.name,age:selected.age,department:selected.department}}/>):(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Name</TableCell>
                        <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Age</TableCell>
                        <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Department</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                <TableBody>
                  {data.map((value,index)=>{
                    return (
                      <TableRow>
                      <TableCell> {value.name}</TableCell>
                      <TableCell>{value.age}</TableCell>
                      <TableCell>{value.department}</TableCell>
                      <TableCell> 
                        <Button variant='contained' onClick={()=>{
                        deleteStudent(value._id);
                        }}color="error">DELETE </Button> </TableCell>
                        <TableCell><Button  onClick={()=>{editStudent(value._id);}}  variant="contained">EDIT</Button></TableCell>
                      </TableRow>
                    
                  );
                  })}

                </TableBody>
                </Table></TableContainer>
        )}
    </div>
  )
}

export default Viewstudent