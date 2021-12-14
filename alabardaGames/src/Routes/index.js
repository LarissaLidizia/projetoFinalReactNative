import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login'
import {Cliente} from '../screens/Clientes'

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Cliente'
                component={Cliente}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}