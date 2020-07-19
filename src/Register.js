import React, { Component}from 'react';
import './Register.css';
import {Button, Form, FormGroup,  Input} from 'reactstrap';

class Register extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:"",
      confirmPassword:"",
      emailError:"",
      passwordError:"",
      confirmPasswordError:"",
      name:"",
    }
  }
  valid(){
    if((!this.state.email.includes("@") || !this.state.email.includes(".com"))&& (this.state.password.length< 8) && (this.state.password!==this.state.confirmPassword))
    {
      this.setState(
        {emailError:"invalid Email",passwordError:"Password Length must be greater than 8",confirmPasswordError:"Password doesnot Match"}
        )
    }
    else if((!this.state.email.includes("@") || !this.state.email.includes(".com"))&& (this.state.password.length< 8))
    {
      this.setState(
        {emailError:"invalid Email",passwordError:"Password Length must be greater than 8"}
        )
    }
    else if(!this.state.email.includes("@")|| !this.state.email.includes(".com"))
    {
      this.setState(
        {emailError:"Invalid Email"}
        )
    }
    else if((this.state.password.length< 8))
    {
      this.setState(
        {passwordError:"Password Length is less"}
        )
    }
    else if((this.state.password!==this.state.confirmPassword))
    {
      this.setState(
        {confirmPasswordError:"Password doesnot Match"}
        )
    }
    else{
      return true;
    }
  }
  Submit(){
    {
      this.setState(
        {emailError:"",passwordError:"",confirmPasswordError:""}
        )
      if(this.valid()){
        localStorage.setItem('document',JSON.stringify(this.state));
        alert("Registered Successfully!")
        window.location.href="/"
      }
      
    }
  }
    render(){ 
    return (
    <Form className="Reg">
      <img className="mt-5 mb-2"src="/images/logo1.JPG" alt="iaugmentor Labs"></img>
      <img className="mt-3 mb-2"src="/images/logo2.JPG" alt="iaugmentor Labs"></img>
        <h1><span className="font-weight-bold,text-center">Register User</span> </h1>
        <div className="line"> 
    <p>{this.state.emailError}{this.state.passwordError}{this.state.confirmPasswordError}</p>
        <FormGroup>
        <Input className="mt-2" type="Fname" placeholder="FirstName" onChange={(event)=>{this.setState({name:event.target.value})}}></Input>
       </FormGroup>
       <FormGroup>
      <Input type="Lname" placeholder="LastName" ></Input>
      </FormGroup>
      </div>
      <FormGroup>
        <Input className="mt-2" type="text" placeholder="Email" onChange={(event)=>{this.setState({email:event.target.value})}} onChange={(text)=>{this.setState({email:text.target.value})}}></Input>
       </FormGroup>
       <FormGroup>
      <Input type="password" placeholder="Password" onChange={(event)=>{this.setState({password:event.target.value})}} onChange={(text)=>{this.setState({password:text.target.value})}} ></Input>
      </FormGroup>
      <FormGroup>
      <Input type="password" placeholder="Confirm Password" onChange={(event)=>{this.setState({confirmPassword:event.target.value})}} ></Input>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block" onClick={()=>this.Submit()}>
        Register
      </Button>
      </Form>
       
    );
  }
  }
  
  export default Register;