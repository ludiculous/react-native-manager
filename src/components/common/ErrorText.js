import React from 'react';
import {Text} from 'react-native';


const ErrorText = (props) =>{
    const {ErrorStyle} = styles;

    return(
        <Text style={ErrorStyle}>{props.children}</Text>
    )

};

const styles = {
    ErrorStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red',
        paddingTop:5,
        paddingBottom:5
    }
}

export {ErrorText};