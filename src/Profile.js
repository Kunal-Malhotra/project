import React, { Component}from 'react';
import './Profile.css';
import Login from './Login';

class Profile extends Component {
  render(){
    let data1= localStorage.getItem('document')
    data1 = JSON.parse(data1); 
  return (
    <div>
      <div className="sidenav">
        <img src="/images/IAUG.JPG"></img>
          </div>
      <div className="emp-profile">
        <h1>Profile</h1>
        <img src="/images/pic.jpg"></img>
        <h4 className="mt-2">{data1.name}</h4>
        <a id="but" href="/" routerLinkActive={Login }>Logout</a>
      </div>
      <div className="emp-profile1"><br></br>
        <h5 className="pl-4">Email ID:</h5>
        <p contenteditable="true" className="mt-3 mb-2" id="input">{data1.email}</p>
        <h5 className="pl-4">Employee ID:</h5>
        <p contenteditable="true" className="mt-3 mb-3" id="input">Employee ID</p>
        <h5 className="pl-4">Streams:</h5>
        <p contenteditable="true" className="mt-3 mb-3" id="input">Enter Streams:</p>
        <h5 className="pl-4">Enter Hobbies:</h5>
        <p contenteditable="true" className="mt-3 mb-3" id="input">Enter Hobbies</p>
        <h5 className="pl-4">Strengths:</h5>
        <p contenteditable="true" className="mt-3 mb-3" id="input">Enter Strengths</p>
        <h5 className="pl-4">Achivements:</h5>
        <p contenteditable="true" className="mt-3 mb-3 pb-3" id="input">Enter Achivements</p>
      </div>
    </div>
  );
}
}

export default Profile;