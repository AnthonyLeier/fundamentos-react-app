import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default () => (
	<SafeAreaView style={style.App}>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		<Aleatorio min={5} max={90}/>
		{/* <MinMax min="5" max="13" />
		<MinMax min={15} max={47} /> */}
		{/* <CompPadrao />
		<Comp1 />
		<Comp2 />
		<Primeiro /> */}
	</SafeAreaView>
);

const style = StyleSheet.create({
	App: {
		backgroundColor: '#FF7',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});
