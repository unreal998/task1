let initialState = {
    title:1,
    name: "Ann",
    last: 1,
    age: 19,
    gender:1,
    email: 1,
    photo: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
}

const userReducer = (state = initialState , action) => {
    let tempState = Object.assign({}, state )
    switch (action.type){
        case "USER_DATA":
            tempState.title = action.payload.title,
            tempState.name= action.payload.name,
            tempState.last = action.payload.last,
            tempState.gender = action.payload.gender,
            tempState.age = action.payload.age,
            tempState.photo = action.payload.photo,
            tempState.email = action.payload.email;
            break;
         case "USER_NAME":
             tempState.name = action.name;
             break;
        case "FETCH_USERS_SUCCESS":
            tempState.title = action.payload.title,
            tempState.name= action.payload.name,
            tempState.last = action.payload.last,
            tempState.gender = action.payload.gender,
            tempState.age = action.payload.age,
            tempState.photo = action.payload.photo,
            tempState.email = action.payload.email;
        case "FETCH_USERS":
         console.log("action.payload");
    }
    return tempState;
}

export default userReducer;
