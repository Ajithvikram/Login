import React,{Component} from 'react';
import axios from 'axios';

class Server extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            items:[]
        };
   axios.get('http://localhost:3001/posts')
    .then(res => {
        this.setState({items:res.data})
    }); 
    }

    componentDidMount() { 
            let url ="http://localhost:3001/posts"
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                let posts= data.map((post, index) => {
                    return(
                        <div key={index}>
                            <h1>{post.title}</h1>
                            <p>tags:{post.tags}</p>
                        </div>
                    )
                })
                this.setState({posts: posts});
            })
        }
        render(){
            console.log(this.state.items);
            return(
                <div>
                    {this.state.posts}
                </div>
            );
        }

}

export default Server;