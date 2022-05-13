import React, { Component } from 'react';
import './Login.css';
import './SignUp';

class SignUp extends Component {
    
    state = { 
        username: "",
        email: "",
        password: "",
        confirmPassword:"",    
    }   

    onSign = ()=>{
        this.props.sign();
    }
    
    
    render() { 
        return ( 
            <div className="box">
                    <h1 className='logo1'>LOGO</h1>
                    <div className='section1'>
                       <h2 className='sign1'>Login</h2>
                       <h2 className='login1'><a href="#!">Sign up</a></h2>
                    </div>
                    <form action="#" className='forms sign-up'>
                    <div className='username-icons email-icons'>
                            <input 
                            type="text" 
                            name='username'
                            id='username'
                            ref={this.usernameRef}
                            placeholder='Username'
                            />
                          <i class="fa-solid fa-user"></i>
                           
                    </div>
                        <div className='email-icons email-icons-sign'>
                            <input 
                            type="email" 
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={this.handleEmail}
                            onChange={this.handleEmail}
                           />
                           <i class="fa-solid fa-square-envelope"></i>
                           
                        </div>
                        <div className='password-icons-sign email-icons'>
                            <input 
                            type="password" 
                            name='password'
                            id='password'
                            placeholder='Password'
                           />
                          <i class="fa-solid fa-key"></i>
                        </div>
                        <div className='password-confirm-icons email-icons'>
                            <input 
                            type="password" 
                            name='confirm-password'
                            id='confirm-password'
                            placeholder='Confirm password'
                           />
                          <i class="fa-solid fa-key"></i>
                        </div>
                        <div className='section3-sign'>
                            <button type='button' className='btn btn-sign' 
                            onClick={this.onSign}
                            >Sign up</button>
                        </div>
                    </form>

                    
                </div>
            
         );
    }
}
 
export default SignUp;