const PubSub = require('../helpers/pub_sub.js');

const TeamsListView = function(container, league){
  this.container = container;
  this.league = league;
}

TeamsListView.prototype.render = function(){
  const testString = document.createElement('div')
  testString.textContent = "teams list goes here after click"
  this.container.appendChild(testString)
}

module.exports = TeamsListView;
