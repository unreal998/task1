import {combineReducers} from "redux";
import CarsRducers from "./car";
import ActiveCar from "./car-active"


const allReducers = combineReducers({
    cars: CarsRducers,
    active: ActiveCar
});

export default allReducers