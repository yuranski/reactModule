import logo from '../images/iconUser.png'
import './css/style.css';


export function UserInfo() {
    return (
        <div className="flex alignItems mLeft900">
            <img className="w-Logo" src={logo} alt="a"/>
            <p className="mLeft11">User</p>
        </div>
    )
}