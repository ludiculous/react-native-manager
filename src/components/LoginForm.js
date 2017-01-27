import React, {Component} from 'react';
import {Card, CardSection, Input, Button,ErrorText,Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,LoginUser} from '../actions';


class LoginForm extends Component{


    onEmailChange(email){
        this.props.emailChanged(email);

    }
    onPassWordChange(pw){
        this.props.passwordChanged(pw);
    }
    handleLogin(){
        const {email,password} = this.props;
        this.props.LoginUser(email,password)
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        else{
            return(
                <Button onPress={this.handleLogin.bind(this)}>
                    Login
                </Button>
            )
        }

    }

    render (){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPassWordChange.bind(this)}
                        value={this.props.password}
                        />
                </CardSection>

                <ErrorText>{this.props.error}</ErrorText>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) =>{
    const {email,password,error,loading} = state.Auth ;
    return {
        email,
        password,
        error,
        loading

    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,LoginUser})(LoginForm);