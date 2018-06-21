export const select = (car) => {
    alert(car.model);
    return {
        type: "CAR_SELECTED",
        payload: car
    }
};



