import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {


    let inc = useSelector(({counter}) => counter)
    let users = useSelector(({users}) => users)
    let dispatch = useDispatch()


    function increment() {
        dispatch({type: "INC"})
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => dispatch({type: 'USERS', payload: value}))
    },[])

    return (
        <div>

            <button onClick={increment}>+</button>
            <h1>{inc}</h1>
            <div>{users.map(value => <div key={value.id}>{value.name} </div>)}</div>
        </div>
    );
}

export default App;
