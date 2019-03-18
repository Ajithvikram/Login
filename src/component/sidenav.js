import React,{Component} from 'react';
import {SideNav, MenuIcon} from 'react-simple-sidenav';
import { Button } from 'react-bootstrap';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'C:/Users/Professional/login/node_modules/mdbreact';

class SideNavPage extends Component{
  state = {showNav:false}
  render() {
    return (
      <div className="side">
          <MenuIcon class="menu" onClick={() => this.setState({showNav: true})}/>

          <SideNav 
            showNav = {this.state.showNav}
            onHideNav = {() => this.setState({showNav: false})}
              titleStyle     =  {{backgroundColor: 'orange'}}
              item={[
                  <ul><Button href="/">Home</Button><br/></ul>]}
              items={[
                  <ul><MDBDropdown>
                        <MDBDropdownToggle caret color="primary">
                                    About
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem><Button href="/member">Employee Details</Button></MDBDropdownItem>
                            <MDBDropdownItem><Button href="/server" >Contact</Button></MDBDropdownItem>
                            <MDBDropdownItem><Button href="/register">Add</Button> </MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem><a href="/ntg">feedback</a></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown></ul>
              ]}
              itemStyle      =  {{backgroundColor: '#ff'}}
              title="iEXEMPLAR">
              </SideNav>
      </div>
    );
  }
}

export default SideNavPage;
