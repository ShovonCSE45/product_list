import React, { Component } from 'react';

class Event_Handler_class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue: ''
      }
    }
    handleonChange = (e) => {
        this.setState({
            changedValue: e.target.value
        },() =>{
            console.log(this.state.changedValue);

        })
        // console.log(e.target.value);
        
    }

    render() {
        return (
            <div>
                <input type="test" onChange={this.handleonChange}/>
                <p>{this.state.changedValue}</p>
            </div>
        );
    }
}

export default Event_Handler_class;