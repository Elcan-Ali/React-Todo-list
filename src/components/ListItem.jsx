import React, { useContext, useState } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"
import { GlobalContext } from '../context/GlobalContext'

function ListItem({ text, id }) {
    const { list, setList } = useContext(GlobalContext)
    const [listItemValue, setListItemValue] = useState(text)

    const [edit, setEdit] = useState(true)

    const deleteHandler = (parameter) => {
        const filter = list.filter(item => item.id !== parameter)
        setList(filter)
    }

    return (
        <li id='listItem' className='border p-1 mb-2 rounded'>
            <div className='d-flex gap-2 justify-content-between' >
                <input type="text" readOnly={edit} value={listItemValue} onChange={(e) => setListItemValue(e.target.value)} className='px-3 input-w-80 border-0' />
                <div className='d-flex gap-2'>
                    <button className={`${ edit ?  "btn-dark" : "btn-primary"  } btn  py-1 px-2`} onClick={() => setEdit(!edit)}><FiEdit2 /></button>
                    <button className='DeleteBtn btn btn-dark py-1 px-2' onClick={() => deleteHandler(id)}><RiDeleteBack2Fill /></button>
                </div>
            </div>
        </li>
    )
}

export default ListItem