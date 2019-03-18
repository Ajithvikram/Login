import React,{Component} from 'react';
import Data from './member.json';
import {BootstrapTable, TableHeaderColumn} from 'C:/Users/Professional/login/node_modules/react-bootstrap-table';
import 'C:/Users/Professional/login/node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

class Table extends Component{
    render(){
        const selectRow = {
            mode: 'checkbox', 
            clickToSelect: true
          };
          const cellEdit = {
            mode: 'click',
            blurToSave: true,
            afterSaveCell: this.afterSaveCell
          };
          const options = {
            onAddRow: this.onAddRow,
            onFilterChange: this.onFilterChange,
            onExportToCSV: this.onExportToCSV,
            onDeleteRow: this.onDeleteRow,
            saveText: 'Custom Save Text'
          };
          const dat = JSON.stringify(Data);
          const products = JSON.parse(dat);
          console.log("product",products);
        return(
            <form>
            <BootstrapTable className='boot' data={products.data} options={options} version='4' pagination exportCSV
                    selectRow={selectRow} insertRow deleteRow scrollTop={'Bottom'} csvFileName='Employee' cellEdit={ cellEdit } 
                    hover condensed search>
                        <TableHeaderColumn dataSort dataField="id" isKey>ID</TableHeaderColumn>
                        <TableHeaderColumn dataSort dataField="name">EmployeeName</TableHeaderColumn>
                        <TableHeaderColumn dataSort dataField="age">Age</TableHeaderColumn>
                        <TableHeaderColumn dataSort dataField="dob">D.O.B</TableHeaderColumn>
                    </BootstrapTable>
                    </form>
        );
    }
}
export default Table;