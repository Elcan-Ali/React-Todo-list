import React, { useContext } from 'react'
import ListItem from './ListItem'
import { GlobalContext } from '../context/GlobalContext'
import { nanoid } from 'nanoid'

function List() {


    const { list } = useContext(GlobalContext)
    return (
        <ul className='px-4'>
            {list.map(item => <ListItem key={nanoid()}  {...item} />)}
        </ul>
    )
}

export default List