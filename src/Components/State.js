import React, { Component } from 'react';
import '../style.css';

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }

    handelIncrease = () => {
         this.setState({
            count: this.state.count + 1
         })
    }
    handleDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        const {count}= this.state;
        return (
            <div>
                <h1>Count : {count}</h1>
                <button className='newBtn' onClick={this.handelIncrease}>+</button>
                <button className='newBtn' onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default State;
