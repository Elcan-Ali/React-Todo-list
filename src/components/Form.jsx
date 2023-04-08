import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { nanoid } from "nanoid"

function Form() {
    const { list, setList } = useContext(GlobalContext)
    const [input, setInput] = useState("")



    const submitHandler = (e) => {
        e.preventDefault()
        if (input.trim() !== "") {
            const newObject = { text: input.trim(), id: nanoid() }
            setList([...list, { ...newObject }])
        }
        setInput("")
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <form onSubmit={submitHandler} id='Form' className='m-4 p-1  d-flex justify-content-between align-items-center ps-4 rounded'>
            <input type="text" placeholder='Add your new todo...' value={input} onInput={inputHandler} className='border-0 input-w-80' />
            <button className='btn btn-dark p-2'>add</button>
        </form>
    )
}

export default Form