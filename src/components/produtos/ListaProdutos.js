import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';

import produtos from './produtos';

export default props => {
	function listar() {
		return produtos.map(p => {
			return (
				<Text key={p.id}>
					{p.id}) {p.nome} tem R${p.preco}
				</Text>
			);
		});
	}
	return (
		<>
			<Text style={Estilo.textG}>Lista de Produtos</Text>
			{listar()}
		</>
	);
};
