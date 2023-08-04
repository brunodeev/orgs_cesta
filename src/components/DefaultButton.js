import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function DefaultButton({ button, action }){
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.textButton}>{button}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
});