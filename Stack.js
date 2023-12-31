import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import LoginScreen from "./screens/Login"
import DataScreen from "./screens/DataScreen"
import PlaceOrder from "./screens/PlaceOrder"
import NormalOrder from "./screens/NormalOrder"
import FoodsAndSnacks from "./screens/FoodsAndSnacks"
import DrinksAndBeverages from "./screens/DrinksAndBeverages"
const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen 
                    name="Profile"
                    component={ProfileScreen}
                />
                <Stack.Screen 
                    name="Normal Order"
                    component={NormalOrder}
                />
                <Stack.Screen 
                    name="Foods And Snacks"
                    component={FoodsAndSnacks}
                    />
                    <Stack.Screen 
                    name="Drinks And Beverages"
                    component={DrinksAndBeverages}
                    />
                <Stack.Screen 
                    name="Manager Account Login"
                    component={LoginScreen}
                />
                <Stack.Screen 
                    name="Kitchen Account Login"
                    component={LoginScreen}
                />
                <Stack.Screen 
                    name="Drinks Account Login"
                    component={LoginScreen}
                />
                <Stack.Screen 
                    name="View All Orders"
                    component={DataScreen}
                />
                <Stack.Screen 
                    name="Place New Order"
                    component={PlaceOrder}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack