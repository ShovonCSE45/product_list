import React, { Component } from 'react';
import Login_page from './Login_page';
import Home_page from './Home_page';

class Index_Page extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Islogin: true,
      }
    }
    render() {
        const {Islogin}= this.state;
        if (Islogin) {
            return <Home_page />
        }
        else {
            return <Login_page />
        }
        return (
            <div>
                <h1>Hi from Index page</h1>
            </div>
        );
    }
}

export default Index_Page;