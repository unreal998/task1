const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type){
        case "ADD": 
            state = {
                result: state.result,
                lastValues: state.lastValues,
                lastValues: [state.lastValues, action.payload],
                result: state.result+ action.payload
            };
            break;
        case "SUBSTRACT": 
            state = {
                result: state.result,
                lastValues: state.lastValues,
                lastValues: [state.lastValues, action.payload],
                result: state.result- action.payload
            };
    }
    return state;
}
export default mathReducer;