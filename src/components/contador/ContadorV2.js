import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';

import ContadorDisplay from './ContadorDisplay';
import ContadorActions from './ContadorActions';

export default props => {
	const [num, setNum] = useState(0);

	const aumenta = () => setNum(num + 1);
	const diminui = () => setNum(num - 1);

	return (
		<>
			<Text style={Estilo.textG}>Contador</Text>
			<ContadorDisplay num={num} />
			<ContadorActions inc={aumenta} dec={diminui} />
		</>
	);
};
