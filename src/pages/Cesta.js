import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return (
        <Image source={topo} style={styles.imagem} />
    );
}

const styles = StyleSheet.create({
    imagem: {
        height: 578 / 768 * width,
        width: '100%',
    }
})