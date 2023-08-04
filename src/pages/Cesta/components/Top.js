import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
 
import topo from '../../../../assets/topo.png';
import DefaultText from '../../../components/DefaultText';

const width = Dimensions.get('screen').width;

export default function Top({ title }){
    return (
        <View>
            <Image source={topo} style={styles.image} />
            <DefaultText style={styles.title}>{title}</DefaultText>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 578 / 768 * width,   // Altura baseada na divisao das dimensoes da imagem, multiplicado com a largura do dispositivo
        width: '100%',
    },
    title: {
        width: '100%',
        position: 'absolute',   // Inserir texto sobre o componente de tras
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
});