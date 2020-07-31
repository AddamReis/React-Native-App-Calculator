/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';

import {Topo, Resultado, Painel} from './components/Index';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {num1: '', num2: '', operacao: 'soma', resultado: ''};

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }
  calcular() {
    let resultado = 0;
    const n1 = parseFloat(this.state.num1);
    const n2 = parseFloat(this.state.num2);

    if (n1 !== '' || n2 !== '') {
      switch (this.state.operacao) {
        case 'soma':
          resultado = n1 + n2;
          break;

        case 'subtracao':
          resultado = n1 - n2;
          break;

        case 'divisao':
          if ((n1 > 0 && n2 === 0) || (n1 > 0 && n2 < 0)) {
            resultado = 'Não dividirás por zero';
          } else {
            resultado = n1 / n2;
          }
          break;

        case 'multiplicacao':
          resultado = n1 * n2;
          break;

        default:
          resultado = 0;
      }
      this.setState({resultado: resultado.toString()});
    }
  }

  atualizaOperacao(operacao) {
    this.setState({operacao: operacao});
  }

  atualizaValor(nome, numero) {
    const obj = {};
    obj[nome] = numero;

    this.setState(obj);
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        />
      </View>
    );
  }
}
