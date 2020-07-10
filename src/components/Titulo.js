import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => (
	<Fragment>
		<Text style={Estilo.textG}>{props.principal}</Text>
		<Text style={Estilo.textP}>{props.secundario}</Text>
	</Fragment>
);
