import React,{Component} from 'react';
import ReactTable from 'react-table';
import Data from './member.json'
import './member.css';

class Member extends Component{
    render() {
        return(
            <div className="text-center"> 
                <ReactTable 
                data={Data.data}
                columns={Data.columns}
                className='columns' />
            </div>
        );
    }
}
export default Member;