import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
import Condicao from './Condicao';

export default props => {
	const usuario = props.usuario || {};
	return (
		<>
			<Condicao teste={usuario && Object.keys(usuario).length !== 0}>
				<Text style={Estilo.textG}>Usuário Logado:</Text>
				<Text style={Estilo.textG}>
					{usuario.nome} ------- {usuario.email}
				</Text>
			</Condicao>
		</>
	);
};
