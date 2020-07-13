import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo';

import produtos from './produtos';

export default props => {
	return (
		<>
			<Text style={Estilo.textG}>Lista de Produtos V2</Text>
			<FlatList 
			data={produtos}
			keyExtractor={i => `${i.id}`}
			renderItem={({item: p}) => {
				return <Text>{p.id}) {p.nome}{p.preco}</Text>
			}}/>
		</>
	);
};
