import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Top from './components/Top';
import Details from './components/Details';
import Items from './components/Items';

export default function Cesta({ top, details, items }){
    return (
        <ScrollView>
            <Top {...top}/>     
            <View style={styles.container}>
                <Details {...details}/>
                <Items {...items} />
            </View>
        </ScrollView>
    );
}

// Definicao dos estilos
const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})