import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Top from './components/Top';
import Details from './components/Details';
import Item from './components/Item';
import DefaultText from '../../components/DefaultText';

export default function Cesta({ top, details, items }){
    return (
        <View>
            <FlatList
                data={items.list}
                renderItem={Item}
                keyExtractor={({itemName}) => itemName}
                ListHeaderComponent={() => {
                    return (
                        <View>
                            <Top {...top}/>
                            <View style={styles.container}>
                                <Details {...details}/>
                                <DefaultText style={styles.title}>{items.title}</DefaultText>
                            </View>
                        </View>
                    )
                }}
            />   
        </View>
    );
}

// Definicao dos estilos
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
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})