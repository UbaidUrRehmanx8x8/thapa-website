import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const DataOnUi = ({data}) => {
  return (
    <div className='Data-On-Ui'>
        <div className='Name-Email'>
        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Remove</h2>
        </div>
        
      {data.map((element, index)=>{
        return(
        <div className='Mapped-Data' key={index}>

            <h2>{element.user}</h2>
            <h3>{element.email}</h3>
            <Button variant="contained" size='small' style={{backgroundColor:'red'}}>
                <DeleteIcon style={{ color: 'white' }} />
            </Button>

        </div>
     ) })}
    </div>
  )
}

export default DataOnUi