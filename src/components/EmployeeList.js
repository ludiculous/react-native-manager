import _ from 'lodash';
import React,{Component} from 'react';
import {View,Text,ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component{
    componentWillMount(){
        this.props.employeesFetch();
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }

    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !==r2
        });

        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow(employee){
        return (
            <ListItem employee={employee}/>
        )
    }


    render(){
        console.log(this.props);
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                >

            </ListView>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.Employees);

    const employees = _.map(state.Employees,(val,key)=>{
        //val = {}
        //containing name, phone, shift
        //use the ... so you don't have to type out
        //val.name, val.phone
        return {...val,key};
    });
    return {
        employees
    }
}

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);