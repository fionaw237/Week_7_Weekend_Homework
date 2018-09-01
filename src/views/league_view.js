const TeamsView = require('./teams_list_view.js');
const PubSub = require('../helpers/pub_sub.js');

const LeagueView = function(container, league){
  this.container = container;
  this.league = league;
}

LeagueView.prototype.render = function(){
  const leagueDiv = document.createElement('div');
  const leagueDivHeader = this.getLeagueHeader()
  leagueDiv.appendChild(leagueDivHeader);
  const leagueDetailsList = this.getLeagueDetailsList();
  leagueDiv.appendChild(leagueDetailsList);
  this.container.appendChild(leagueDiv);
}

LeagueView.prototype.getLeagueHeader = function(){
  const header = document.createElement('h3');
  header.textContent = this.league.name;
  return header;
}

LeagueView.prototype.getLeagueDetailsList = function(){
  const leagueUl = document.createElement('ul');
  this.populateList(leagueUl);
  return leagueUl;
}

LeagueView.prototype.populateList = function(list){
  const seasonDates = document.createElement('li')
  seasonDates.textContent = `Dates: ${this.league.currentSeason.startDate} to ${this.league.currentSeason.endDate}`;
  list.appendChild(seasonDates);
}

module.exports = LeagueView;
