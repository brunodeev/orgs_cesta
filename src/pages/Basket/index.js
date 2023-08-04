import React from 'react';
import { StyleSheet, View } from 'react-native';

import Top from './components/Top';
import Details from './components/Details';

export default function Cesta({top, details}){
    return (
        <View>
            <Top {...top}/>     
            <View style={styles.container}>
                <Details {...details}/>
            </View>
        </View>
    );
}

// Definicao dos estilos
const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})