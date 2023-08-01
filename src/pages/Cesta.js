import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return (
        <View>
            <Image source={topo} style={styles.image} />
            <Text style={styles.title}>Detalhes da Cesta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 578 / 768 * width,
        width: '100%',
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    }
})