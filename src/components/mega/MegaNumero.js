import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from '../estilo';

export default props => {
	return (
		<View style={style.Container}>
			<Text style={[Estilo.textG, style.Num]}>{props.num}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	Container: {
		width: 50,
		height: 50,
		backgroundColor: '#000',
		margin: 5,
		borderRadius: 25,
	},
	Num: {
		color: '#FFF',
	},
});
