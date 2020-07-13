import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
    return (
    <View style={style.Flex}>
        <View style={style.V0}></View>
        <View style={style.V1}></View>
        <View style={style.V2}></View>
    </View>
    )
};

const style = StyleSheet.create({
	Flex: {
        flexGrow: 1,
        width: 100,
		backgroundColor: '#fff',
    },
    V0: {
        height: 100,
        backgroundColor: '#F2BE22',
    },
    V1: {
        backgroundColor: '#678C16',
        flexGrow: 2,
    },
    V2: {
        backgroundColor: '#9ABF11',
        flexGrow: 3,
	},
});
