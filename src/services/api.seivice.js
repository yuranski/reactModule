import {addUser, loadUsers} from "../redux/actionCreators";

const getUsers = async () => {
    return (await (await fetch('https://jsonplaceholder.typicode.com/users')).json())
}

const saveUser = async (dispatch, {name}) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name
        })
    }).then(value => value.json())

    dispatch(addUser(response))
}

const fetchUsersWithThunk = () => async (dispatch) => {
    let response = (await (await fetch('https://jsonplaceholder.typicode.com/users')).json())
    dispatch(loadUsers(response))
}

const addUserWithThunk = (payload) => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: payload.name
        })
    })

    let saveUser = await response.json()

    dispatch(addUser(saveUser))
}

export {getUsers,saveUser,fetchUsersWithThunk,addUserWithThunk}