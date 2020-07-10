import React, {useState} from 'react';
import Filho from './Filho';
import { Text } from 'react-native';

export default props => {

	const [num, setNum] = useState(0);

	function exibirValor(numeroRecebido){
		setNum(numeroRecebido);
	}
	return (
		<>
			<Text>{num}</Text>
			<Filho min={1} max={60} funcao={exibirValor} />
		</>
	);
};
