import {useReducer} from "react";
import reducer from "./reducer";
import './count.css';

export function Count() {


    let [{a, b, c, d}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0, d: 0})


    return (
        <div>
            <p>Перша частина завдання</p>
            <div className={'flex'}>
                <button className={'width'} onClick={() => dispatch({obj: '1', diya: '-'})}>-1</button>
                <h1>{a}</h1>
                <button className={'width'} onClick={() => dispatch({obj: '1', diya: '+'})}>+1</button>
            </div>
            <div className={'flex'}>
                <button className={'width'} onClick={() => dispatch({obj: '2', diya: '-'})}>-1</button>
                <h1>{b}</h1>
                <button className={'width'} onClick={() => dispatch({obj: '2', diya: '+'})}>+1</button>
            </div>
            <div className={'flex'}>
                <button className={'width'} onClick={() => dispatch({obj: '3', diya: '-'})}>-1</button>
                <h1>{c}</h1>
                <button className={'width'} onClick={() => dispatch({obj: '3', diya: '+'})}>+1</button>
            </div>

            <br/>
            <p>Друга частина завдання</p>
            <div className={'flex'}>
                <button className={'width'} onClick={() => dispatch({obj: '4', diya: '-'})}>-2</button>
                <h1>{d}</h1>
                <button className={'width'} onClick={() => dispatch({obj: '4', diya: '+'})}>+10</button>
            </div>


        </div>
    )
}