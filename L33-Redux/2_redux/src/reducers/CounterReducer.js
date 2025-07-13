export default function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'counter/increment':
            if (state > 10) return state;
            else return state + 1
        case 'counter/decrement':
            if (state > -10) return state - 1
            else return state;
        default:
            return state
    }
}