import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Mega from './components/mega/Mega';
// import FlexboxV4 from './components/layout/FlexboxV4';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import Flexbox from './components/layout/Flexbox';

// import Nome from './components/Nome';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';

// const usuario = {nome: 'Gui', email: 'gui@gmail.com'};

export default () => (
	<SafeAreaView style={style.App}>
		<Mega qtde={7}/>
		{/* <Aleatorio min={5} max={90} />
		<Flexbox />
		<FlexboxV2 />
		<FlexboxV3 />
		<FlexboxV4 />
		<Nome />
		<ListaProdutosV2 />
		<ListaProdutos />
		<UsuarioLogado usuario={usuario} />
		<Familia>
			<Membro nome="Rodrigo" sobrenome="Faro" />
			<Membro nome="Carlos" sobrenome="Faro" />
			<Membro nome="Ana" sobrenome="Faro" />
			<Membro nome="Robson" sobrenome="Faro" />
		</Familia>
		<Diferenciar />
		<ParImpar num={4}/>
		<ContadorV2 />
		<Pai />
		<Contador inicial={100} />
		<Titulo principal="Cadastro Produto" secundario="Tela de Cadastro de Produto"/>
		<Botao />
		<MinMax min={15} max={47} />
		<CompPadrao />
		<Comp1 />
		<Comp2 />
		<Primeiro /> */}
	</SafeAreaView>
);

const style = StyleSheet.create({
	App: {
		backgroundColor: '#FF7',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});
