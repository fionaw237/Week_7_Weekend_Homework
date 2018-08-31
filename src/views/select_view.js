const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Leagues:country-data-loaded', (event) => {
    const countryNames = event.detail;
    this.populate(countryNames);
    console.log(this.element);
  })
}

SelectView.prototype.populate = function(countries){
  countries.forEach((country, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = country;
    this.element.appendChild(option);
  })
}

module.exports = SelectView
