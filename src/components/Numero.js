/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default props => (
    <TextInput 
    style={styles.numero} 
    value={props.num}
    onChangeText={valorCampo => props.atualizaValor(props.nome, valorCampo)} />
);

const styles = StyleSheet.create({
    numero:{
        width: 140, 
        height: 80,
        fontSize: 25,
        borderBottomColor: '#00053f',
        borderBottomWidth: 0.5,
        marginLeft: 10,
        marginRight:10
    }
});