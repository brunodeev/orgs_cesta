import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../assets/topo.png";
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;   // Pegando a largura do dispositivo atual

export default function Cesta(){
    return (
        <View>
            <Image source={topo} style={styles.image} />
            <Text style={styles.title}>Detalhes da Cesta</Text>
            <View style={styles.container}>
                <Text style={styles.name}>Cesta de Verduras</Text>
                <View style={styles.farm}>
                    <Image style={styles.farmImage} source={logo} />
                    <Text style={styles.farmName}>Jennya Jack Farm</Text>
                </View>
                <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
                <Text style={styles.price}>R$ 40,00</Text>
            </View>
        </View>
    );
}

// Definicao dos estilos
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
        lineHeight: 26,
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})