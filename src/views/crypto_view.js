const CryptoView = function(element, info){
  this.element = element;
  this.info = info;
}

const roundToTwo = function(value) {
  return(Math.round(value * 100) / 100);
}

CryptoView.prototype.render = function () {
  const container = document.createElement('div');
  container.classList.add('crypto-info');

  const name = document.createElement('h2');
  name.textContent = `${this.info.name} (${this.info.symbol})`;
  container.appendChild(name);

  const price = document.createElement('h3');
  price.textContent = `$${roundToTwo(this.info.price)}`
  container.appendChild(price);

  this.element.appendChild(container);
};

module.exports = CryptoView;
