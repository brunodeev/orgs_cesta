import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';

import TextNormal from '../../components/DefaultText';
import logo from '../../../assets/logo.png';

import Top from './components/Top';
import DefaultText from '../../components/DefaultText';

const width = Dimensions.get('screen').width;   // Pegando a largura do dispositivo atual

export default function Cesta(){
    return (
        <View>
            <Top styles={styles}/>
            <View style={styles.container}>
                <DefaultText style={styles.name}>Cesta de Verduras</DefaultText>
                <View style={styles.farm}>
                    <Image style={styles.farmImage} source={logo} />
                    <DefaultText style={styles.farmName}>Jennya Jack Farm</DefaultText>
                </View>
                <DefaultText style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</DefaultText>
                <DefaultText style={styles.price}>R$ 40,00</DefaultText>
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
    name: {
        fontSize: 26,
        color: '#464646',
        lineHeight: 42,
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    farmImage: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})