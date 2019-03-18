import React,{Component} from 'react';
import Axios from 'axios';
import md5 from 'md5';
import './register.css';

class Delete extends Component{
    constructor(props){
        super(props); 
        this.state={
            name:'',
            password:''
        }
    }

    handleChangeName = (event) =>{
        this.setState({name:event.target.value});
    }
    handleChangePassword = (event) => {
        this.setState({password:md5(event.target.value)});
    }
    handleSubmitDelete = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            password:this.state.password
          };      
        Axios.delete('http://localhost:3001/posts',user)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        window.alert("Account is Deleted")
        //this.props.history.push("/");
    }
    render() {
        return(
            <div className='reg'>
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h1>Welcome to iEXEMPLAR</h1>
                    <p className="name">Name:<input type="text" onChange={this.handleChangeName}/> </p>
                    <p className="password">Password:<input type="password" onChange={this.handleChangePassword}/> </p>
                    <button type="submit" onClick={this.handleSubmitDelete}>Delete</button>
                </form>
            </React.Fragment>
            </div>
        );
    }

}

export default Delete;