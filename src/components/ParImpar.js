import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilo';

export default ({num = 0}) => {
	return (
		<View>
			{num % 2 === 0 ? (
				<Text style={Estilo.textG}>Par</Text>
			) : (
				<Text style={Estilo.textG}>Impar</Text>
			)}
		</View>
	);
};
