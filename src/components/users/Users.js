import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.services";
import {User} from "../user/User";
import {Route} from "react-router-dom";
import {StaticUserDetails} from "../user/StaticUserDetails";
import {UserDetails} from "../user/UserDetails";

export function Users(props) {

    let {match: {url},history} = props

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            {users.map(value => <User history={history} item={value} key={value.id}/>)}
            {/*<Route path={`${url}/:id`} render={(props) => {*/}
            {/*    return <StaticUserDetails {...props}/>*/}
            {/*}}/>*/}
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }}/>

        </div>
    )
}