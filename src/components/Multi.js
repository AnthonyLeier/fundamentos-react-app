import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default function Comp() {
	return <Text style={Estilo.textG}>Comp #Oficial</Text>;
}

function Comp1() {
	return <Text style={Estilo.textM}>Comp #1</Text>;
}

export function Comp2() {
	return <Text style={Estilo.textP}>Comp #2</Text>;
}

export {Comp1};
