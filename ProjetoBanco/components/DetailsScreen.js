import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nome do Produto: {route.params.item.name}</Text>
      <Text>Descrição: {route.params.item.description}</Text>
    </View>
  );
}

export default DetailsScreen;