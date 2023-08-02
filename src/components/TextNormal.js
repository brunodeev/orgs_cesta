import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextNormal({children, style}){

    let styleMode = styles.text;

    if(style?.fontWeight === 'bold'){
        styleMode = styles.boldText;
    }


    return <Text style={[style, styleMode]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'InterRegular',
        fontWeight: 'normal',
    },
    boldText: {
        fontFamily: 'InterBold',
        fontWeight: 'normal',
    }
})