import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
    const {max, min} = props;
    const resultado = Math.floor(Math.random() * (max - min) + min);
	return <Text style={Estilo.textG}>O valor aleatório é {resultado}</Text>;
}
    
