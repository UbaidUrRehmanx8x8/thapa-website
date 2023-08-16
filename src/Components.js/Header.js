import React from 'react'

const Header = () => {
  return (
    <div className='main-div'>


      <input type='number' min="5" max="7" required/>
      <br/>
      <input type='number' min="0" step="0.1" max="10"/>
       
    </div>
  )
}

export default Header;