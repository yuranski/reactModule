export default function reducer(state = {a: 0, b: 0, c: 0, d: 0}, action) {
    if (action.obj === '1' && action.diya === '+') {
        return {...state, a: state.a + 1}
    } else if (action.obj === '1' && action.diya === '-') {
        return {...state, a: state.a - 1}
    } else if (action.obj === '2' && action.diya === '+') {
        return {...state, b: state.b + 1}
    } else if (action.obj === '2' && action.diya === '-') {
        return {...state, b: state.b - 1}
    } else if (action.obj === '3' && action.diya === '+') {
        return {...state, c: state.c + 1}
    } else if (action.obj === '3' && action.diya === '-') {
        return {...state, c: state.c - 1}
    } else if (action.obj === '4' && action.diya === '+') {
        return {...state, d: state.d + 10}
    } else if (action.obj === '4' && action.diya === '-') {
        return {...state, d: state.d - 2}
    }
}