import React, { Component } from 'react';

class React_Class_Component extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleOnClick = () => {
        this.setState({
            count: this.state.count + 1

        })
    }
    render() {
        return (
            <div>
                <h2>Couner :{this.state.count}</h2>
                <button onClick={this.handleOnClick}>Bangladesh</button>
            </div>
        );
    }
}

export default React_Class_Component;