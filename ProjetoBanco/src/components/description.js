import React from "react";
import  { Text, View } from 'react-native';
import loginCss from "../assests/styles";

class DescriptionPage extends React.Component {
    render() {
        return (
            <View style={loginCss.container}>
                <Text>DescriptionPage</Text>
            </View>
        )
    }
}

export default DescriptionPage;