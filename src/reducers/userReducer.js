let initialState = {
    name: "Ann",
    age: 19,
    photo: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
}

const userReducer = (state = initialState , action) => {
    let tempState = Object.assign({}, state )
    switch (action.type){
        case "USER_DATA":
            tempState.name= action.payload.name,
            tempState.age = action.payload.age,
            tempState.photo = action.payload.photo
        }

    return tempState;
}

export default userReducer;
