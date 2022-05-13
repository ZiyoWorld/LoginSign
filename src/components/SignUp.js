import React, { Component, createRef } from 'react';
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

    usernameRef = createRef();
    emailRef = createRef();
    passwordRef = createRef();
    confirmPasswordRef = createRef();


    
    componentDidMount(e){
        this.usernameRef.current.focus();
        // if(e.key === "Enter"){
        //     this.emailRef.current.focus();
        // }
    }

    handleValue = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        },
        ()=> {
            if(this.state.username.length === 20){
                this.emailRef.current.focus();
            }
            if(this.state.email.length === 30){
                this.passwordRef.current.focus();
            }
            if(this.state.password.length === 20){
                this.confirmPasswordRef.current.focus();
            }
        }
        )
    }

    // handleMir = (e)=>{
    //     if(e.key === "Enter"){
    //         this.emailRef.current.focus();
    //     }
    // }
    
    
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
                            onChange={this.handleValue}
                            placeholder='Username'
                            />
                          <i class="fa-solid fa-user"></i>
                           
                    </div>
                        <div className='email-icons email-icons-sign'>
                            <input 
                            type="email" 
                            name='email'
                            id='email'
                            ref={this.emailRef}
                            placeholder='Email'
                            value={this.handleEmail}
                            onChange={this.handleValue}
                           />
                           <i class="fa-solid fa-square-envelope"></i>
                           
                        </div>
                        <div className='password-icons-sign email-icons'>
                            <input 
                            type="password" 
                            name='password'
                            id='password'
                            ref={this.passwordRef}
                            onChange={this.handleValue}
                            placeholder='Password'
                           />
                          <i class="fa-solid fa-key"></i>
                        </div>
                        <div className='password-confirm-icons email-icons'>
                            <input 
                            type="password" 
                            name='confirm-password'
                            id='confirm-password'
                            ref={this.confirmPasswordRef}
                            onChange={this.handleValue}
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