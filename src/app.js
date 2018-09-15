const Cryptos = require('./models/cryptos.js');
const CryptoListView = require('./views/crypto_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const cryptos = new Cryptos();
  cryptos.bindEvents();

  const container = document.querySelector('body');
  const cryptoListView = new CryptoListView(container);
  cryptoListView.bindEvents();
})
