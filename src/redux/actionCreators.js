import {LOAD_USERS,ADD_USER} from "./actions";

const   loadUsers = (payload) => {
    return {type: LOAD_USERS, payload}
}

const addUser = (payload) => {
    return {type: ADD_USER, payload}
}

export {loadUsers,addUser}

