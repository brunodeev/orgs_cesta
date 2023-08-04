import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import DefaultText from '../../../components/DefaultText';

export default function Items({ title, list }){
    return (
        <View>
            <DefaultText style={styles.title} >{ title }</DefaultText>
            {list.map(({ itemName, itemImage }) => {
                return (
                    <View style={styles.container} key={itemName}>
                        <Image source={itemImage} style={styles.image} />
                        <DefaultText style={styles.name} >{itemName}</DefaultText>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
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