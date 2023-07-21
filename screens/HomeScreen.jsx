import { Button } from "react-native"

const HomeScreen = ({navigation}) => {
    return (
        <Button 
            title="Go to Jane's Profile"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
    )
}

export default HomeScreen