import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {ListGroup} from 'react-bootstrap'

function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]);
    
    useEffect(() => {
        
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
        setListOfUSer(res.data)
    })
}, [listOfUSer]);
    return (
        <div>
            <ListGroup>
            {listOfUSer.map( user=> (
                <ListGroup.Item key={user.name}>
                {user.name}
            </ListGroup.Item>))}
            </ListGroup>
            
        </div>
    )
}

export default UserList










