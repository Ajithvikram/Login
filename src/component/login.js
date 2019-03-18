import React,{Component} from 'react'
import './login.css';
import Table from './table';
import FooterPage from './footer'; 
import SideNavPage from './sidenav';
import CarouselPage from './carousel';
import 'C:/Users/Professional/login/node_modules/bootstrap-css-only/css/bootstrap.css'
class Login extends Component {
    render () {
        return(
            <React.Fragment>
            <header>
            <SideNavPage />
                <h5 className="head">Welcome to iEXEMPLAR</h5> 
            </header>
            <CarouselPage/><br/>
            <form className='login'>
                <Table/>
            </form>
            <FooterPage />
            </React.Fragment>
        );
    }
}
export default Login;