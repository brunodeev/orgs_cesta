import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextNormal({children, style}){
    return <Text style={[style, styles.text]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'InterRegular',
    }
})