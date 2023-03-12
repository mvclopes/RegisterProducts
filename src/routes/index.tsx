import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// Screens
import Register from '../screens/Register';

// Definição das rotas possíves
type RootStackParamList = {
    Listing: undefined,
    Register: undefined
};

export type RegisterProps = StackNavigationProp<RootStackParamList, 'Register'>

const Stack = createStackNavigator<RootStackParamList>();

function StackRouter() {
    return (
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      );
}

export default function Router() {
    return(
        <NavigationContainer>
            <StackRouter />
        </NavigationContainer>
    ); 
}