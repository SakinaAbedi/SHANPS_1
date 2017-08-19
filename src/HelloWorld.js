import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	constructor(props) {
     super(props);
     this.state = { val: '' };
     this.handleUpdate = this.handleUpdate.bind(this)
}
handleUpdate(event) {
	this.setState({val: event.target.value });
}
    render() {
     return (
 	  <div className="HelloWorld">
 	  <label>EXPIRY DATE CALCULATOR
 	  <br/>
 	  <select onChange={this.handleUpdate}>
       <option>Choose option</option>
       <option value="duration">Best before x duration</option>
       <option value="expiry_date">Use By dd/mm/yy </option>
      </select>
      </label>
 	    <br/>
 	    {this.state.val}
      </div>
 	);
  }
};

export default HelloWorld;
