import React, { useState } from 'react'
import Header from '../../components/header'
import Blogs from '../../components/blogs'
import Users from '../../components/users'
import {Link} from 'react-router-dom';

function Main() {

    
    const [users, setUsers] = useState([
        {name: 'Bekzat', age: 20},
        {name: 'Bekarys', age: 24},
        {name: 'Dauren', age: 21},
        {name: 'Amir', age: 25},
    ])


    const sortUsers = sort => {
        const elements = [...users]
        elements.sort((a, b) => a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0)
        setUsers(elements)
    }

    return(
        <div>
            <Header name="Zhanerke" surname="Shaikasym"/>
            <Blogs/>
        </div>
    )
}

export default Main;