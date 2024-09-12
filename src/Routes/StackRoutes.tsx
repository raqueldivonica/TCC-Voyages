import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import Cad from '../screens/CadC';
import LoginG from '../screens/LoginG'
import CadC from "../screens/CadC";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CadC"> 

            <Stack.Screen 
            name="cadastro" 
            component={ CadC } />

            <Stack.Screen
            name="loging"
            component={ LoginG } />
        </Stack.Navigator>
    )
}

/*
            <Stack.Screen 
            name="home" 
            component={ Home }/>


<Stack.Navigator initialRouteName="Home">


<Stack.Screen name="Home" component={Home}/>
</Stack.Navigator>
*/
