import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, loadUsers} from "./redux/actionCreators";
import {addUserWithThunk, fetchUsersWithThunk, getUsers, saveUser} from "./services/api.seivice";



function App() {

    let state = useSelector(state => state)
    let dispatch = useDispatch()


    useEffect(async () => {
        dispatch(fetchUsersWithThunk())
    }, [])

    const xxx = (e) => {
        let user = {name: 'pupok'}
        dispatch(addUserWithThunk(user))
    }

    return (
        <div>
            <button onClick={xxx}>save user</button>
            {state.users.map(value => <div key={value.id}>{value.id} - {value.name}</div>)}
        </div>
    );
}
export default App;




// function App() {
//
//     let store = useSelector(state => state)
//     let dispatch = useDispatch()
//     let {users} = store
//
//     useEffect(async () => {
//         let response = await getUsers()
//         dispatch(loadUsers(response))
//     }, [])
//
//     let handlerEvent = async (e) => {
//         let user = {name: 'vasysa'}
//         saveUser(dispatch,user)
//     }
//
//     return (
//         <div>
//             <button onClick={handlerEvent}>save user</button>
//             {users.map(value => <div key={value.id}>{value.id} - {value.name}</div>)}
//         </div>
//     );
// }
//
// export default App;
