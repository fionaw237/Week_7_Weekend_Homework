const PubSub = require('../helpers/pub_sub.js');
const LeagueView = require('./league_view.js');

const LeagueListView = function(container){
  this.container = container;
  this.leagues = [];
}

LeagueListView.prototype.bindEvents = function(){
  PubSub.subscribe('Leagues:league-data-ready', (event) => {
    this.leagues = event.detail;
    // console.log(this.leagues);
    this.country = this.leagues[0].area.name;
    this.render();
  })
}

LeagueListView.prototype.render = function(){
  this.container.innerHTML = "";
  this.renderCountryHeading();
  this.renderCompetitions();
}

LeagueListView.prototype.renderCountryHeading = function(){
  const header = document.createElement('h1')
  header.classList.add('country-header');
  header.textContent = `${this.country}`;
  this.container.appendChild(header);
}

LeagueListView.prototype.renderCompetitions = function(){
  this.leagues.forEach((league) => {
    // console.log(league);
    const leagueView = new LeagueView(this.container, league);
    leagueView.render();
  });

}

module.exports = LeagueListView;
