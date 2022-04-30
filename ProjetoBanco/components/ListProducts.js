import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FlatListBasics = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { id: 1, name: 'Tranquilize', image: 'assets/images/prod1.jpg', description: 'Use e fique tranquilo' },
                    { id: 2, name: 'Serenus', image: 'assets/images/prod1.jpg', description: 'Use e fique sereno' },
                    { id: 3, name: 'Calman', image: 'assets/images/prod1.jpg', description: 'Use e fique calmo' },
                    { id: 4, name: 'Equilbrisse', image: 'assets/images/prod1.jpg', description: 'Use e fique equilibrado' },
                    { id: 5, name: 'PraKalmar', image: 'assets/images/prod1.jpg', description: 'Use pra acalmar' },
                ]}
                renderItem={({ item }) => 
                    <TouchableOpacity title="Detalhes"
                        onPress={() =>
                            navigation.navigate('Details')
                        }>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default FlatListBasics;