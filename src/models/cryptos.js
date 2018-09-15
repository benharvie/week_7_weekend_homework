const PubSub = require('../helpers/pubsub.js');
const Request = require('../helpers/request.js');

const Cryptos = function(){

}

Cryptos.prototype.bindEvents = function () {
  const request = new Request('https://api.coinmarketcap.com/v2/ticker/?structure=array?convert=GBP&limit=10');
  request.get()
    .then((data) => { // if successfull
      PubSub.publish('Cryptos:prices-grabbed', data)
    })
    .catch((err) => { // on error
      console.error(err)
    });
};

module.exports = Cryptos;
