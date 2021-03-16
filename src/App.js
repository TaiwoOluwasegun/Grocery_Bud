import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const[list, setList] = useState([]);
  const[isEditing,setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:'', type:''});
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hello')
    
  }

  return <section className='section-center'>
    <div className='grocery-container'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input ype='text' className='grocery' value={name} placeholder='eggs' onChange={(e)=>{setName(e.target.value)}}></input>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <List/>
    <button className='clear-btn'>Clear Btn</button>
    </div>

  </section>
}

export default App
