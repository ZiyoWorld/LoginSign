import React, { Component, createRef } from 'react';
import './Login.css';


class Login extends Component {
   
    state = {
      email: "",
      password: "",
    }
    
    

      cardEmailRef = createRef();
      cardPasswordRef = createRef();
      
      handleValue = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
      }
      componentDidMount(){
          this.cardEmailRef.current.focus();
      }
      
      submitBtn = ()=>{
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        const isValidEmail = regEmail.test(this.state.email);
        const isValidPassword = mediumRegex.test(this.state.password);
        
            
        if(!isValidEmail){
          alert("Please, Enter valid email");
          return;
        }else{
          this.cardPasswordRef.current.focus();
        }
        if(!isValidPassword){
          alert("Please, Enter valid password");
          return;
        }
         alert("configuration🎉🕐✈");
         this.setState({
          email: "",
          password: "",
         });     
         this.cardEmailRef.current.focus();
      } 
      
      onLogin = ()=>{
        this.props.logins();
      } 
      
    render() { 
        return ( 
                <div className="card">
                    <h1 className='logo1'>LOGO</h1>
                    <div className='section1'>
                        <h2 className='login1'><a href="#!">Login</a></h2>
                        <h2 className='sign1'>Sign up</h2>
                    </div>

                    <form action="#" className='forms'>
                        <div className='email-icons'>
                            <input 
                            type="email" 
                            name='email'
                            id='email'
                            autoComplete='off'
                            value={this.state.value}
                            onChange={this.handleValue}
                            ref={this.cardEmailRef}
                            placeholder='Email'
                           />
                           <i class="fa-solid fa-square-envelope"></i>
                           
                        </div>
                        <div className='password-icons email-icons'>
                            <input 
                            type="password" 
                            name='password'
                            id='password'
                            value={this.state.password}
                            onChange={this.handleValue}
                            ref={this.cardPasswordRef}
                            placeholder='Password'
                           />
                          <i class="fa-solid fa-key"></i>
                           
                        </div>
                        <div className='section3'>
                            <a href="https://www.google.com/search?q=gmail+parol+change+password&oq=&sourceid=chrome" target="_blank"
                            >Forget password?</a> 
                            <button 
                            onClick={this.submitBtn} 
                            type='button'
                            className='btn'>Login</button>
                        </div>
                    </form>
                    <p className='footer'>Don't have an account? <span> <a href="#!" 
                    onClick={this.onLogin}
                    >Sign up</a> </span></p>
                </div>
                
            
         );
    }
  }

export default Login;