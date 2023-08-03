import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import DefaultText from '../../../components/DefaultText';
import logo from '../../../../assets/logo.png';

export default function Details(){
    return (
        <View>
            <DefaultText style={styles.name}>Cesta de Verduras</DefaultText>
            <View style={styles.farm}>
                <Image style={styles.farmImage} source={logo} />
                <DefaultText style={styles.farmName}>Jennya Jack Farm</DefaultText>
            </View>
            <DefaultText style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</DefaultText>
            <DefaultText style={styles.price}>R$ 40,00</DefaultText>
        </View>
    );
}

const styles = StyleSheet.create({
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
    },
});