import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import DefaultText from '../../../components/DefaultText';

export default function Details({ name, farmName, farmImage, description, price }){
    return (
        <View>
            <DefaultText style={styles.name}>{name}</DefaultText>
            <View style={styles.farm}>
                <Image style={styles.farmImage} source={farmImage} />
                <DefaultText style={styles.farmName}>{farmName}</DefaultText>
            </View>
            <DefaultText style={styles.description}>{description}</DefaultText>
            <DefaultText style={styles.price}>{price}</DefaultText>
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