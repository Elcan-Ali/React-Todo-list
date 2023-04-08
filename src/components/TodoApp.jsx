import React from 'react'
import Form from './Form'
import List from './List'
import GlobalContextProvider from '../context/GlobalContext'

function TodoApp() {

  return (
    <div id='TodoApp' className='p-5'>
      <h2 className='text-center  text-white'>What's the Plan for today ?</h2>
      <GlobalContextProvider>
        <Form />
        <List />
      </GlobalContextProvider>
    </div>
  )
}

export default TodoApp