
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

class App extends Component {

  render() {

    return (

      <div>Hello from App
        <button onClick={() => this.props.addCars(cars)}>Add Cars</button>
        <button onClick={() => this.props.addBikes(bikes)}>Add Bikes</button>
        <ul>
          {/* {this.props.items.map(item => <li>item</li>)} */}
        </ul>
        <Child />
      </div>
    )
  }

}

export default connect(null, { addCar, addCars, addBike, addBikes })(App);
