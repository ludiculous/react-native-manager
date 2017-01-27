import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER} from './types';
import {Actions} from 'react-native-router-flux';
import Firebase from 'firebase';


export const emailChanged = (email) =>{
    return {type:EMAIL_CHANGED,
        payload:email}
}

export const passwordChanged = (pw) =>{
    return {type:PASSWORD_CHANGED,
        payload:pw}
}

export const LoginUser = (email,password) =>{
    return (dispatch) => {
        dispatch({type:LOGIN_USER});
        Firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user=>{
                return loginUserSuccess(dispatch,user)
            })
            .catch(()=>{

                Firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then((user)=>{
                        return loginUserSuccess(dispatch,user)
                    })
                    .catch((err)=>{
                        return loginUserFail(dispatch,err)
                    })

            })
    };

};


const loginUserFail = (dispatch,err) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload:err.message
    })
};


const loginUserSuccess = (dispatch,user) =>{
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload:user
    });

    Actions.main().employeeList();
};
