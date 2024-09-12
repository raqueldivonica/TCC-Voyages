import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import LoginG from '../screens/LoginG'
import CadC from "../screens/CadC";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="cadastro">
            <Stack.Screen 
            name="home" 
            component={ Home }/>

            <Stack.Screen 
            name="cadastro" 
            component={ CadC }/>

            <Stack.Screen
            name="loging"
            component={ LoginG }/>
        </Stack.Navigator>
    )
}

/*      

 initialRouteName="Home">


*/
