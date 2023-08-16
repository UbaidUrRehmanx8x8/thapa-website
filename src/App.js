import './App.css';
import Header from './Components.js/Header';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import DataOnUi from './Components.js/DataOnUi';

function App() {

  const[user ,setUser]=useState('');
  const[email, setEmail]=useState("");

  const[data, setData]=useState([]);

  const addData=()=>{
    setData(
      [...data,{user,email}]
    )
    setUser('')
    setEmail('')

  }

  return (
    <div className='AppMain'>
      <Header/>
    <div className="AppData">
      
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m:1, width: '25ch' },
        '& button': { m: 1 ,height :'7.5ch'}
          }}
      
    >
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="User Name"
          multiline
          maxRows={4}
          value={user}
          onChange={(e)=>{setUser(e.target.value)}}
        />
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Placeholder"
          multiline
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

      <Button variant="contained" size='small' onClick={addData}>
        <AddCircleOutlineIcon fontSize='large'/>
      </Button>

       
      </div>
    </Box>

    </div>
    
    <div className='Data-On-Ui-App'>
     <DataOnUi data={data}  />
     
    </div >
    </div>
  );
}

export default App;
