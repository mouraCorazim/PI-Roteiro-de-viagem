const path = require('path');

module.exports = {
  entry: {
    index: './public/scripts/index.js',
    alterarSenha: './public/scripts/alterar-senha.js',
    edicaoDePerfil: './public/scripts/edicaoDePerfil.js',
    agendaDeViagem: './public/scripts/agenda-viagem.js',
    cadastroDeViagem: './public/scripts/cadastro-viagem.js',
    edicaoDePerfil: './public/scripts/edicaoDePerfil.js',
    membros: './public/scripts/membros.js',
    listaDeViagem: './public/scripts/listaDeViagem.js',
    embarque: './public/scripts/embarque.js',
    itensDaMala: './public/scripts/itensDaMala.js',
    novaTarefa: './public/scripts/novaTarefa.js',
    visualizarTarefa:'./public/scripts/visualizarTarefa.js',
    menus: './public/scripts/commons/menus.js',
    travelHeader: './public/scripts/commons/travelHeader.js',
    editarTarefa: './public/scripts/editar-tarefa.js',
    editarViagem: './public/scripts/editar-viagem.js',
    recuperarSenha: './public/scripts/recuperar-senha.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'bundles'),
  },
};