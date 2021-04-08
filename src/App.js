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
    setList(list.map((item) => {
      if
      (  item.id===editId){
       return {...item, title: name}
      }
       return item
    })
    )
    setName('')
    setEditId(null)
    setIsEditing(false )
    setAlert(true, 'sucess', 'value changed')

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

  const clearList = () =>{
    showAlert(true, 'danger', 'items cleared')
    setList([]);
  }

  
  const removeItem = (id) =>{
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }


  const editItem = (id) =>{
   
   const specificItem= list.find((item) => item.id === id)
   setIsEditing(true)
   setEditId(id)
   setName(specificItem.title)
  }


  return <section className='section-center'>
    <div className='grocery-container'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
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
  
            <List items={list} removeItem ={removeItem} editItem={editItem} />
          <button onClick = {clearList} className='clear-btn'>Clear Btn</button>
          </div>
      )
         
          
      }
 
    </div>

  </section>
}

export default App
