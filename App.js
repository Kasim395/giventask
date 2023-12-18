
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';;
import Home from './Script/Screens/home.js';
import Signup from './Script/Screens/signup.js';
import Data from './Script/Screens/datapage.js';

const Stack = createNativeStackNavigator();


function App() 
{

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown:false, animation: 'none'}}  />   
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false,  animation: 'none'}}  />  
      <Stack.Screen name="Api Data" component={Data} options={{  animation: 'none'}}  />           
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;