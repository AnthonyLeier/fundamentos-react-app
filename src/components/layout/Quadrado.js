import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
	const lado = props.lado || 50;
	return (
		<View
			style={{
				height: lado,
				width: lado,
				backgroundColor: props.color || '#000',
			}}
		/>
	);
};
