import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import AddBook from './addBook';
import ShowBooks from './ShowBooks';
import { getbook } from '../api/index'

const TodoList = () => {

    const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))
    const history = useHistory()
    const [booklist, setbooklist] = useState([]);
    useEffect(() => {
        getbook().then((res) => {
            console.log(res);
            setbooklist(res.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    if (!user) {
        history.push('/signin');
        return null
    }
    return (
        <>
            {user.user.isAdmin ? (<AddBook />) : null}
            <ShowBooks books={booklist} isAdmin={user.user.isAdmin} />
        </>
    )
}

export default TodoList;
