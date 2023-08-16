import { useState } from "react";
import { SafeAreaView, TextInput, Button, Text, View, StyleSheet } from "react-native";

const styled = StyleSheet.create({
    header: {
        textTransform: "uppercase",
        fontWeight: 900,
        textAlign: "center",
        fontSize: 18,
        paddingVertical: 20,
        color: "teal"
    },
    field: {
        borderWidth: 1,
        borderBottomColor: "black",
        borderStyle: "solid",
        marginHorizontal: 6,
        color: "black"
    }
})

const LoginScreen = ({navigation}) => {
    const [names, setNames] = useState('')
    const [isShowName, setIsShowName] = useState(false)

    const showName = () => {
        setIsShowName(true)
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={styled.header}>Account Login</Text>
            </View>
            <View>
                <Text style={{fontWeight: 500, fontSize: 18, textAlign: 'center'}}>Enter your names</Text>
                <TextInput placeholder="Full names" style={styled.field} onChangeText={(text) => setNames(text)} />
                <Button
                    title="Login"
                    onPress={showName}
                />
            </View>
            <View>
                {isShowName && <Text>Names: {names}</Text>}
            </View>
        </SafeAreaView>
    )
}



export default LoginScreen