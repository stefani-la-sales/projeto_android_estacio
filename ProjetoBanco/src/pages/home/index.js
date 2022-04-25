import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from '../../assests/style';
import database from '../../config/firebaseconfig';


export default function HomePage({ navigation }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        database.collection("Banco").onSnapshot((query) => {
            const list = [];
            query.array.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setItem(list);
        });
    }, []);

    return (
        <View style={styles.background}>
            <FlatList />
            <TouchableOpacity>
                <Text>Oiii</Text>
            </TouchableOpacity>
        </View>
    )
}