import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux"


let initialStore = {
    nameFilm: [],
    imgPoster: []
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

let store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
