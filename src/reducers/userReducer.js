const userReducer = (state = {
    name: "Maks",
    age: 19
}, action) => {
    switch (action.type){
        case "SET_NAME": 
            state = {
                name: state.name,
                age: state.age,
                name: action.payload
            };
            break;
        case "SET_AGE": 
            state = {
                name: state.name,
                age: state.age,
                age: action.payload
            };
        case "TEST":
            state = {
                responce: action.payload
            };
        }

    return state;
}
export default userReducer;