import React,{Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
class Navigbar extends Component {
    render(){
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                <Navbar.Brand >Welcome to iEXEMPLAR</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/member">Table</Nav.Link>
                    </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light" >Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}
export default Navigbar;