import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

export default props => {
	return (
		<View style={style.Flex}>
			<Quadrado color="#678C16" lado={20}/>
			<Quadrado color="#9ABF11" lado={30}/>
			<Quadrado color="#F2BE22" lado={40}/>
			<Quadrado color="#F27507" lado={50}/>
			<Quadrado color="#8C4404" lado={60}/>
		</View>
	);
};

const style = StyleSheet.create({
	Flex: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		height: 350,
		width: '100%',
		backgroundColor: '#fff',
	},
});
