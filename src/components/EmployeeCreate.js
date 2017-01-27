import React, {Component} from 'react';
import {View,Text, Picker,Dimensions} from 'react-native';
import {Card,CardSection,Input,Button} from './common';
import {connect} from 'react-redux'
import {employeeUpdate,employeeCreate} from '../actions'
import EmployeeForm from './EmployeeForm.js'

class EmployeeCreate extends Component{
    onButtonPress(){
        const {name,phone,shift} = this.props;

        this.props.employeeCreate({name,phone,shift:shift||'Monday'});
    }


    render(){
        console.log(this.props.employee);
        return(
            <Card>
                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>


        )
    }
}


const mapStateToProps = (state) =>{
    const {name,phone,shift} = state.EmployeeForm
    return {
        name,phone,shift
    }
}

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate)