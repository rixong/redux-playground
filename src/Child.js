import React, { Component } from 'react';
import {connect} from 'react-redux'

class Child extends Component {

  render() {
    console.log(this.props.items);
    
    return (
      <div>
        <h2>Here's the child.</h2>
        <ul>
        {this.props.items.cars.map((item, idx) => <li key={idx}>{item}</li>  )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state
  }
};

export default connect(mapStateToProps)(Child);