import React, { Component } from 'react';
import './App.css'
import md5 from 'md5';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      employeeName:'',
      password :'',
      Data:[]
    }
    
  }

  userNameChange=(event)=>{
    this.setState({
      employeeName: event.target.value,
    });
  };

  passwordChange=(event)=> {
    this.setState({
      password: md5(event.target.value)
    });
    console.log("pass",this.state.password)
  };

  onSubmit=(event)=>{
    event.preventDefault();
    Axios.get('http://localhost:3001/posts')
    .then(res =>{
      const employee = res.data
      this.setState({Data: employee});
      console.log("Employee",this.state.Data);
      const dat =this.state.Data.filter(data => (data.name === this.state.employeeName && data.password === this.state.password));
      console.log("data filter",dat);
      const datalen = dat.length;
      console.log("length",datalen);
      if(datalen === 1)
      {
        if((this.state.employeeName === dat[0].name) && (this.state.password === dat[0].password)){
          console.log('Welcome to iEEXEMPLAR');
          this.props.history.push('/login');
        }
      }
      else{
        window.alert("Incorrect username and password");
      }
    })
  }

  render() {
    return (
      <div className="App">
          <h1 className="logg">LOGIN PAGE</h1>
          <div className="log">
          <form className="form"><br/>
              <p><b className="input">Employee Name:</b><br/><input type="text" placeholder="Enter Your Name" className="input" value={this.state.employeeName} onChange={this.userNameChange}/></p>
              <p><b className="pass">Password:</b><br/><input type="password" placeholder="Enter your Password" className="input"  onChange={this.passwordChange} /></p>
              <button type="submit" className="button" onClick={this.onSubmit}><b>Login </b></button>
            </form>
              <p>If you are not an employee of iEXEMPLAR<a href="/">Create an account</a></p>
          </div>
      </div>
    );
  }
}

export default App;
