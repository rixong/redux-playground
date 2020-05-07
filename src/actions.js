export const addCar = (item)  => {
  return {
    type: "ADD_CAR",
    payload: item
  }
}

export const addCars = (items)  => {
  return {
    type: "ADD_CARS",
    payload: items
  }
}

export const addBike = (item)  => {
  return {
    type: "ADD_BIKE",
    payload: item
  }
}

export const addBikes = (items)  => {
  return {
    type: "ADD_BIKES",
    payload: items
  }
}