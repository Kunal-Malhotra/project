import React, { Component}from 'react';
import './Login.css';

import Register from './Register'
import {Button, Form, FormGroup, Input} from 'reactstrap';

import { GoogleLoginButton} from 'react-social-login-buttons';
class Login extends Component {
  constructor(){
    super();
    this.state={
      email1:"", 
      password1:"",
      emailError1:"",
      passwordError1:"",
      
    }
  }
  
  valid(){
    
  if(((!this.state.email1.includes("@")) || (!this.state.email1.includes(".com"))) && (this.state.password1.length < 8))
    {
      this.setState(
        {emailError1:"Invalid Email",passwordError1: "Please Enter Valid Password"}
        )
    }
    else if((!this.state.email1.includes("@")) || (!this.state.email1.includes(".com")))
    {
      this.setState(
        {emailError1:"Invalid Email"}
        )
    }
    else if((this.state.password1.length < 8))
    {
      this.setState(
        {passwordError1: "Please Enter Valid Password"}
        )
    }
    else{
      return true;
    }
  }
  
  Submit(){
    { let data = localStorage.getItem('document')
        data = JSON.parse(data);
      this.setState(
        {emailError1:"",passwordError1:"",error1:""}
        )
      if(this.valid() && (data.email==this.state.email1) && (data.password==this.state.password1) )
      { 
        window.location.href="/profile"
      }
      else{
        alert("Invalid");
      }
    }
  }
  
  render(){
  return (
    <Form className="app" onSubmit={e => { e.preventDefault(); }}>   
    <div className="app1">
    <img className="mt-5 mb-3"src="/images/logo1.JPG" alt="iaugmentor Labs"></img>
    <img className="mt-3 mb-3"src="/images/logo2.JPG" alt="iaugmentor Labs"></img>
      <h1><span className="font-weight-bold,text-center">LOGIN</span> </h1>
    </div>
    <FormGroup>
      <Input className="mt-3" type="email" placeholder="Email" onChange={(event)=>{this.setState({email1:event.target.value})}}></Input>
     </FormGroup>
     <FormGroup>
    <Input type="password" placeholder="Password" onChange={(event)=>{this.setState({password1:event.target.value})}}></Input>
    </FormGroup>   
    <div>
      <p>{this.state.error1}{this.state.emailError1}{" "}{this.state.passwordError1}</p>
    </div>
    <Button className="btn-lg btn-dark btn-block" onClick={()=>this.Submit()}>
      Login
    </Button>

    <div className="mt-2">
      or Login with different Account
     </div>
    <GoogleLoginButton></GoogleLoginButton>

    <div className="text-center mt-3">
      <a href="/register" routerLinkActive={Register }>Register</a>
    </div>
    </Form>
  );
}
}

export default Login;
