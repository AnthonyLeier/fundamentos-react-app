import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Primeiro from './components/Primeiro';

import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => (
	<SafeAreaView style={style.App}>
		<CompPadrao />
		<Comp1 />
		<Comp2 />
		<Primeiro />
	</SafeAreaView>
);

const style = StyleSheet.create({
	App: {
		backgroundColor: '#FF7',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
