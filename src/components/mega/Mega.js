import React, {Component} from 'react';
import {Text, TextInput, FlatList, Button, View} from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
	state = {
		qtde: this.props.qtde,
		numeros: [],
	};

	alterarQtde = novaQtde => {
		this.setState({qtde: +novaQtde});
	};

	gerarNumeroExclusivo = nums => {
		const novo = parseInt(Math.random() * 60) + 1;
		return nums.includes(novo) ? this.gerarNumeroExclusivo(nums) : novo;
	};

	gerarNumeros = () => {
		const numerosFinais = Array(this.state.qtde)
			.fill()
			.reduce(n => [...n, this.gerarNumeroExclusivo(n)], [])
			.sort((a, b) => a - b);

		this.setState({numeros: numerosFinais});
	};

	exibirNumeros = () => {
		const nums = this.state.numeros;

		return nums.map(num => {
			return <MegaNumero key={num} num={num} />;
		});
	};

	render() {
		return (
			<>
				<Text style={Estilo.textG}>Gerador de Mega-Sena</Text>
				<TextInput
					keyboardType={'numeric'}
					style={{borderBottomWidth: 1}}
					placeholder="Qtde de Numeros"
					value={`${this.state.qtde}`}
					onChangeText={this.alterarQtde}
				/>
				<Button title="Gerar" onPress={this.gerarNumeros} />
				<View
					style={{
						marginTop: 20,
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}>
					{this.exibirNumeros()}
				</View>
			</>
		);
	}
}
