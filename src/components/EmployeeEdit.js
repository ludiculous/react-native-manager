import _ from 'lodash';
import React, {Component} from 'react';
import {View,Text, Picker,Dimensions} from 'react-native';
import {Card,CardSection,Input,Button,Confirm} from './common';
import {connect} from 'react-redux'
import {employeeUpdate,employeeSave,employeeFire} from '../actions'
import EmployeeForm from './EmployeeForm.js';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{
    state = {showModal:false};

    componentWillMount(){
        _.each(this.props.employee,(value,prop)=>{
            this.props.employeeUpdate({prop,value});
        });
        //when the component loads,
        //fill up the form
        //with the data  from this.props.employee
        //employeeUpdate is the Action which handles values for the input
    }
    onAccept(){
        this.props.employeeFire({key:this.props.employee.key})
    }
    onDecline(){
        this.setState({showModal:false})
    }
    onButtonPress(){
        const {name,phone,shift} = this.props;
        this.props.employeeSave({name,phone,shift,key:this.props.employee.key})

    }
    onTextPress(){
        const {phone,shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    render(){
        console.log(this.props.employee);
        return(
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={()=>this.setState({showModal:!this.state.showModal})}>Fire Employee</Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    >
                    Are you sure you want to fire this person?
                </Confirm>
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

export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeFire})(EmployeeEdit)