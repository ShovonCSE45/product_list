import React,{Component} from "react";
class Card2 extends React.Component {
    render() {
      return(
        <div>
           <h2>{this.props.name}</h2>;
           <p>{this.props.desc}</p>
      </div>
      )     
    }
  }
export default Card2;