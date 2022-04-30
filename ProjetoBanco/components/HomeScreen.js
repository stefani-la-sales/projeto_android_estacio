import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
                data={[
                    { id: 1, name: 'Tranquilize', image: './../assets/images/prod1.jpg', description: 'Use e fique tranquilo' },
                    { id: 2, name: 'Serenus', image: './../assets/images/prod1.jpg', description: 'Use e fique sereno' },
                    { id: 3, name: 'Calman', image: './../assets/images/prod1.jpg', description: 'Use e fique calmo' },
                    { id: 4, name: 'Equilbrisse', image: './../assets/images/prod1.jpg', description: 'Use e fique equilibrado' },
                    { id: 5, name: 'PraKalmar', image: './../assets/images/prod1.jpg', description: 'Use pra acalmar' },
                ]}
                renderItem={({ item }) => 
                    <TouchableOpacity title="Detalhes"
                        onPress={() =>
                            navigation.navigate('Details', {item})
                        }>
                        <Text>{item.name}</Text>
                        <Image source={{uri: item.image}} />
                    </TouchableOpacity>
                }
            />
    </View>
  );
}

export default HomeScreen;