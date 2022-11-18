import logo from './logo.svg';
import './App.css';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import { FiCamera } from "react-icons/fi";
import React_bootstrep from './Components/React_bootstrep';
import State from './Components/State.js';
import Index_Page from './Conditional_randering/Index_Page';
import Event_Handler_class from './Event_Handler_class/index'
import Event_Binding from './Event_Binding/index';
import React_Class_Component from  './Use_State_Function/React_Class_Component';
import React_UseState_Function from './Use_State_Function/React_UseState_Function';
import FORM from './FORM/Form';
import Form_moderate from './FORM/Form_moderate';





function App() {
  
  return (
    <div >
      <Card1 name="Card1" desc="This is Card 1"/>
      <Card2 name="Card2" desc="This is Card 222"/>
    
      <button>
        <FiCamera />
      </button>
      <React_bootstrep />
      <State />
      <Index_Page />
      <Event_Handler_class />
      <Event_Binding /> 
      <React_Class_Component />
      <br />
      <React_UseState_Function />   
      <FORM /> 
      <br />
      <Form_moderate />
      <br />
     
     

    </div>
  );
}

export default App;
