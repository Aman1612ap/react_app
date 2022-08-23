import React from 'react'
import "./Dashboard.css";


const Dashboard = () => {
  return (
    <div className='dash1'>
      <div className='vari'>Varification
      </div>
      
      <div className='vari1'>
      <label>Aadhar no :</label><input type="number"placeholder='Aadhar number'></input>
      <label>Name :</label><input type="text"placeholder='Enter name'></input>
      <button>Check</button>
      </div>
    </div>
  )
}   

export default Dashboard