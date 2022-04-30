import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>This is the Product </Text>
    </View>
  );
}

export default DetailsScreen;