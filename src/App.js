import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([])
  const [toDoInput, setToDoInput] = useState('')
  const [filter, setFilter] = useState('All')

  const setToDoListHandler = e => setToDoList(e)
  const setToDoInputHandler = e => setToDoInput(e)
  const setFilterHandler = e => setFilter(e)

  useEffect(() => {}, [filter])

  return (
    <div className="App">
      <div className='toDoContainer'>

        <div style = {{flex: 1, display: 'flex'}}>
          <input value = {toDoInput} onChange = {e => setToDoInputHandler(e.target.value)} style = {{width: '94%'}} placeholder='ToDo'/>
          <button onClick = {() => {
            if (toDoInput) setToDoListHandler([...toDoList, {key: Date.now(), text: toDoInput, active: true}])
            setToDoInputHandler('')
          }}>Добавить</button>
        </div>

        {
          toDoList.map((toDo) => {
            if (filter === 'All') { return (
              <div className='toDo' key={toDo.key}>
                <div onClick = {() => {
                  setToDoListHandler(toDoList.map(e => e.key === toDo.key ? {...e, active: !e.active} : e))
                }} style = {{border: '3px solid', borderRadius: '10px', width: '12px', background: !toDo.active ? 'black' : null}}/>
                <div style = {{textDecoration: !toDo.active ? 'line-through' : null}}>{toDo.text}</div>
              </div>)
            } else if (filter === 'Active') { return (
              toDo.active ? 
              <div className='toDo' key={toDo.key}>
                <div onClick = {() => {
                  setToDoListHandler(toDoList.map(e => e.key === toDo.key ? {...e, active: !e.active} : e))
                }} style = {{border: '3px solid', borderRadius: '10px', width: '12px', background: !toDo.active ? 'black' : null}}/>
                <div style = {{textDecoration: !toDo.active ? 'line-through' : null}}>{toDo.text}</div>
              </div>
              :
              null
              )
            } else { return (
              !toDo.active ? 
              <div className='toDo' key={toDo.key}>
                <div onClick = {() => {
                  setToDoListHandler(toDoList.map(e => e.key === toDo.key ? {...e, active: !e.active} : e))
                }} style = {{border: '3px solid', borderRadius: '10px', width: '12px', background: !toDo.active ? 'black' : null}}/>
                <div style = {{textDecoration: !toDo.active ? 'line-through' : null}}>{toDo.text}</div>
              </div>
              :
              null
              )}
          })
        }

        <div style = {{width: '80%', display: 'flex', justifyContent: 'space-between', margin: 'auto'}}>
          <div onClick = {() => {
            setFilter('All')
          }} style = {{border: '1px solid', padding: '0 10px', background: filter == 'All' ? 'black' : null, color: 'white', color: filter == 'All' ? 'white' : null}}>All</div>
          <div onClick = {() => {
            setFilter('Active')
          }} style = {{border: '1px solid', padding: '0 10px', background: filter == 'Active' ? 'black' : null, color: 'white', color: filter == 'Active' ? 'white' : null}}>Active</div>
          <div onClick = {() => {
            setFilter('Completed')
          }} style = {{border: '1px solid', padding: '0 10px', background: filter == 'Completed' ? 'black' : null, color: 'white', color: filter == 'Completed' ? 'white' : null}}>Completed</div>
        </div>
      </div>
    </div>
  );
}

export default App;
