import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

export default props => {
	return (
		<View style={style.Flex}>
			<Quadrado color="#678C16" />
			<Quadrado color="#9ABF11" />
			<Quadrado color="#F2BE22" />
			<Quadrado color="#F27507" />
			<Quadrado color="#8C4404" />
		</View>
	);
};

const style = StyleSheet.create({
	Flex: {
		flex: 1,
		width: '100%',
		alignItems: 'flex-end',
		backgroundColor: '#fff',
		justifyContent: 'space-evenly',
	},
});
