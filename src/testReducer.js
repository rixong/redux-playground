export default function testReducer(

  state ,
  action
) {

  console.log(action);

  switch (action.type) {
    case 'ADD_CARS':
      return { cars: action.payload }
    // return Object.assign({}, {cars: action.payload})
    case 'ADD_BIKES':
      // return { ...state, items.concat(action.payload)}
      return Object.assign({}, { bikes: action.payload })
    default:
      return state;
  }
}