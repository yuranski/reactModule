function getUsers(){
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value => value.json())
}

function getUser(id){
}

export {getUsers,getUser}