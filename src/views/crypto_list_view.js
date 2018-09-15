const PubSub = require('../helpers/pubsub.js');
const CryptoView = require('./crypto_view.js')

const CryptoListView = function(element) {
  this.element = element;
};

CryptoListView.prototype.bindEvents = function () {
  PubSub.subscribe('Cryptos:prices-grabbed', (event) => {
    this.parseData(event.detail);
  })
};

CryptoListView.prototype.parseData = function (cryptoObj) {
  const cryptoInfo = cryptoObj.data.map(crypto => { return {
    name: crypto.name,
    symbol: crypto.symbol,
    price: crypto.quotes.USD.price
  }});

  this.populate(cryptoInfo);
};

CryptoListView.prototype.populate = function (info) {
  this.element.innerHTML = ''
  info.forEach(crypto => {
    const cryptoView = new CryptoView(this.element, crypto);
    cryptoView.render();
  })
};

module.exports = CryptoListView;
