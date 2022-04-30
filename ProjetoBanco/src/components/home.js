import React from "react";
import  { Text, View } from 'react-native';
import loginCss from "../assests/styles";

class HomePage extends React.Component {
    render() {
        return (
            <View style={loginCss.container}>
                <Text>Tela de Home</Text>
            </View>
        )
    }
}

export default HomePage;