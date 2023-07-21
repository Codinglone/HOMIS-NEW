import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import LoginScreen from "./screens/Login"
import DataScreen from "./screens/DataScreen"
import SendSmsScreen from "./screens/SendSmsScreen"

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen 
                    name="Profile"
                    component={ProfileScreen}
                />
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen 
                    name="Users"
                    component={DataScreen}
                    options={{title: 'All users'}}
                />
                <Stack.Screen 
                    name="SMS"
                    component={SendSmsScreen}
                    options={{title: 'Send SMS'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack