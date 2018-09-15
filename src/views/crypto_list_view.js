const PubSub = require('../helpers/pubsub.js');

const CryptoListView = function() {

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
  console.log(cryptoInfo);
};

module.exports = CryptoListView;
