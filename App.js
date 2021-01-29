import React from 'react';
import SignIn from './app/Screen/Auth/index';
import OTP from './app/Screen/Auth/Otp';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


const AuthStack= createAppContainer(
 
  createStackNavigator(
    {
      SignIn:SignIn,
      OTP : OTP
    },
    {
     headerMode: "none",
     initialRouteName: "SignIn"
    }
  )
);


const App = () => {
  return(
     <AuthStack />
  )
};

export default App;
