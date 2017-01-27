import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label,onChangeText,value,placeholder,secureTextEntry}) =>{
    const {TextInputStyle,LabelStyle,ContainerStyle} = styles;
    return (
     <View style={ContainerStyle}>
         <Text style={LabelStyle}>{label}</Text>
         <TextInput
             secureTextEntry={secureTextEntry}
             autocorrect={false}
             placeholder={placeholder}
             onChangeText={onChangeText}
             value={value}
             style={TextInputStyle}
             />
     </View>
    );
};


const styles = {
    TextInputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },
    LabelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    ContainerStyle:{
        height:40,
        flex:1,
        flexDirection: 'row',
        alignItems:'center'
    }
}

export {Input};