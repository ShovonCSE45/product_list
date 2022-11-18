import React, { Component } from 'react';

class Event_Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleOnclick(){
        this.setState({
            count : this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleOnclick.bind(this)}>Click Me</button>
                
            </div>
        );
    }
}

export default Event_Binding;