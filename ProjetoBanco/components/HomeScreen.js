import React from 'react';
import { View } from 'react-native';

import FlatListBasics from './ListProducts.js';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatListBasics />
    </View>
  );
}

export default HomeScreen;