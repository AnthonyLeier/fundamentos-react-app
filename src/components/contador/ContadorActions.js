import React from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';

export default props => {
	return (
		<SafeAreaView style={style.Botoes}>
			<Button title="Aumentar" onPress={props.inc} />
			<Button title="Diminuir" onPress={props.dec} />
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    }
})
