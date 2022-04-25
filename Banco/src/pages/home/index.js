import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from '../../assests/style';


export default function HomePage({ navigation }) {
    

    return (
        <View style={styles.background}>
            <FlatList />
            <TouchableOpacity>
                <Text>Oiii</Text>
            </TouchableOpacity>
        </View>
    )
}