import * as React from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StackRoutes from '../Routes/StackRoutes';

const Stack = createNativeStackNavigator()

export function AppNavigator(){
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
