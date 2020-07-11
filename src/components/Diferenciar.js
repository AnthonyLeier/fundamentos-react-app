import React from 'react';
import {Text, Platform} from 'react-native';
import Estilo from './estilo';

export default props => {
	if (Platform.OS === 'android') {
		return <Text style={Estilo.textG}>Android</Text>;
	} else if (Platform.OS === 'ios') {
		return <Text style={Estilo.textG}>iOS</Text>;
	} else {
		return <Text style={Estilo.textG}>Batata</Text>;
	}
};
