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
   if(!name){
    //  display alert message
showAlert(true, 'danger', 'enter a value')   }
   else if(name && isEditing){

   } else {
     showAlert(true, 'success', 'item is added')
     const newItem ={id: new Date().getTime().toString(), title:name};

     console.log(newItem)
     setList([...list, newItem]);
     setName('');
   }
    
  }

  const showAlert = (show = false, type = "", msg='') => {
    setAlert({show,type,msg})
  }

  return <section className='section-center'>
    <div className='grocery-container'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input ype='text' className='grocery' value={name} placeholder='eggs' onChange={(e)=>{setName(e.target.value)}}></input>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className='grocery-container'>
  
            <List items={list} />
          <button className='clear-btn'>Clear Btn</button>

          </div>
      )
         
          
      }
 
    </div>

  </section>
}

export default App
