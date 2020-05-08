export default function testReducer(

  state = { cars: [], bikes: [] },
  action
) {

  // console.log(action);

  switch (action.type) {
    case 'ADD_CARS':
      // return { cars: action.payload }       
      return Object.assign({}, state, { cars: action.payload })
      // return Object.assign({}, {cars: action.payload})
    case 'ADD_BIKES':
      // return { bikes: action.payload }       
      // return { ...state, bikes: action.payload}
      return Object.assign({}, state, { bikes: action.payload })
    case 'ADD_CAR':
      return {...state, cars: [...state.cars.concat(action.payload)]}
    case 'ADD_BIKE':
      return Object.assign({}, state, {bikes: state.bikes.concat(action.payload)})
      
    default:
      return state;
  }
}