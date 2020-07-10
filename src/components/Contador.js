import React, {Fragment, useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
	//	let numero = props.inicial;
	const [numero, setNumero] = useState(inicial);

	const somar = () => setNumero(numero + passo);
	const subtrair = () => setNumero(numero - passo);

	return (
		<Fragment>
			<Text style={Estilo.textG}>{numero}</Text>
			<Button title="+" onPress={somar} />
			<Button title="-" onPress={subtrair} />
		</Fragment>
	);
};
