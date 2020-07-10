import React from 'react';
import {Button} from 'react-native';

export default props => {
	function apertarBotao() {
		console.warn('Botão apertado com sucesso');
	}

	return <Button title="Explodir" onPress={apertarBotao} />;
};
