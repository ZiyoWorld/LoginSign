import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import SignUp from './components/SignUp';
class App extends Component {    
    state = { 
      login: true
    }

    onSign = ()=>{
      this.setState({
        login: !this.state.login
      })
    }
    render() { 
        return ( 
            <div className='container'>
             
              {
                this.state.login ? <SignUp sign={this.onSign} /> : <Login logins={this.onSign} /> 
              }
             
            </div>
         );
    }
}
 
export default App;
