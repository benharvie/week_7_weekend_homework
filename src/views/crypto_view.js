const CryptoView = function(element, info){
  this.element = element;
  this.info = info;
}

CryptoView.prototype.render = function () {
  const container = document.createElement('div');
  
  this.element.textContent = this.info.name;
};

module.exports = CryptoView;
