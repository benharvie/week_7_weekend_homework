const Cryptos = require('./models/cryptos.js');
const CryptoListView = require('./views/crypto_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('body');

  const cryptos = new Cryptos();
  cryptos.bindEvents();

  const cryptoListView = new CryptoListView();
  cryptoListView.bindEvents();
})
