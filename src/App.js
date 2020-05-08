
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addCar, addCars, addBike, addBikes } from './actions';
import Child from './Child'


const cars = ['Ford', 'Bmw', 'Tesla'];
const bikes = [
  { brand: 'Trek', model: 'All Terrain' },
  { brand: 'Schwinn', model: 'GTX3 Hybrid' },
  { brand: 'Giant', model: 'Rock Climber' }
]
const car = 'Honda';
const bike = {brand: 'Raleigh', model: 'Super Tour'}

class App extends Component {

  render() {

    return (

      <div>Hello from App
        <ul>
          <li>        
            <button onClick={() => this.props.addCars(cars)}>Add Cars</button>
          </li>
          <li>        
            <button onClick={() => this.props.addBikes(bikes)}>Add Bikes</button>
          </li>
          <li>        
            <button onClick={() => this.props.addCar(car)}>Add a single Car</button>
          </li>
          <li>        
            <button onClick={() => this.props.addBike(bike)}>Add a single Bike</button>
          </li>
        </ul>
        <ul>
          {/* {this.props.items.map(item => <li>item</li>)} */}
        </ul>
        <Child />
      </div>
    )
  }

}

export default connect(null, { addCar, addCars, addBike, addBikes })(App);
