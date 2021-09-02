import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {}



let initialStore = {
    name: [],
    img: []
}
let reducer = (state = initialStore, action) => {
    switch (action.type) {
        case "ADD" : {
            return {...state, name: [...state.name, action.payload]}
        }
        case "DELETED" : {

            for (let i = 0; i < state.length; i++) {
                const stateElement = state[i];
                console.log(stateElement)
            }
            return {...state, name: action.payload}
        }
        default:
            return state
    }
}

ReactDOM.render(
    <React.StrictMode>
            <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
