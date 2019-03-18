import React,{Component} from 'react';
import Axios from 'axios';
import md5 from 'md5';
import './register.css';
import MaterialIcon from 'material-design-icons';
class Register extends Component{
    constructor(props){
        super(props); 
        this.state={
            name:'',
            password:'',
            Data:[]
        }
    }

    handleChangeName = (event) =>{
        this.setState({name:event.target.value});
    }
    handleChangePassword = (event) => {
        this.setState({password:md5(event.target.value)});
    }

    handleSubmitAdd = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            password:this.state.password
          };      
          if(this.state.name !== '' && this.state.password !== '')
          {
        Axios.post('http://localhost:3001/posts',user)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        window.alert("Account is created")
        this.props.history.push("/");
    }
    else {
        window.alert("Please Enter Name & Password")
    }
    }
    render() {
        return (
              <div className="view">
                  <header className="h2">iEXEMPLAR</header>
                  <div className="in1">
                    <header className="h3"><b>Register</b></header>
                    <p><MaterialIcon icon="alarm_on" />
                    <b></b><input className="name1" type="text" placeholder="Enter your Name" onChange={this.handleChangeName} /></p>
                    <p><b>Password:</b><input className="pass1" type="password" placeholder="Create your Password" onChange={this.handleChangePassword} /></p>
                    <button type="submit" className="btn1" onClick={this.handleSubmitAdd}>Create</button>
                  </div>

              </div>
        );
      }
    }

export default Register;