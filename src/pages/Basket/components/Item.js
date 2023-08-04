import React from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';

import DefaultText from '../../../components/DefaultText';

export default function Item({ item: { itemName, itemImage}}){
        return <View style={styles.container} key={itemName}>
                <Image source={itemImage} style={styles.image} />
                <DefaultText style={styles.name} >{itemName}</DefaultText>
            </View>
    }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    image: {
        width: 55,
        height: 55
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 12,
        color: '#464646'
    }
});