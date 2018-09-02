const TeamsListView = require('./teams_list_view.js');
const PubSub = require('../helpers/pub_sub.js');

const LeagueView = function(container, league){
  this.container = container;
  this.league = league;
}

LeagueView.prototype.render = function(){
  const leagueDiv = document.createElement('div');

  const leagueDivHeader = this.getLeagueHeader()
  this.container.appendChild(leagueDivHeader);
  const leagueDetailsList = this.getLeagueDetailsList();
  leagueDiv.appendChild(leagueDetailsList);
  this.renderTeamsList(leagueDiv);

  this.container.appendChild(leagueDiv);
}

LeagueView.prototype.getLeagueHeader = function(){
  const header = document.createElement('h3');
  header.textContent = this.league.name;
  return header;
}

LeagueView.prototype.getLeagueDetailsList = function(){
  const leagueUl = document.createElement('ul');
  leagueUl.classList.add('league-ul')
  this.populateList(leagueUl);
  return leagueUl;
}

LeagueView.prototype.populateList = function(list){
  const seasonDates = document.createElement('li');
  seasonDates.textContent = `Dates: ${this.league.currentSeason.startDate} to ${this.league.currentSeason.endDate}`;
  list.appendChild(seasonDates);
  const teams = document.createElement('li');
  teams.textContent = "Teams: ";
  teams.classList.add('teams-list-heading')
  list.appendChild(teams);
  const teamsLabel = document.createElement('text');
  teamsLabel.classList.add(`clickable-teams-label`);
  teamsLabel.textContent = "(view all)";
  teams.appendChild(teamsLabel);
}

LeagueView.prototype.renderTeamsList = function(container){
  const teamsLabel = container.querySelector(`.clickable-teams-label`);
  const teamsListHeading = container.querySelector('.teams-list-heading')
  teamsLabel.addEventListener('click', () => {
    teamsListHeading.removeChild(teamsListHeading.lastChild);
    const teamsListView = new TeamsListView(teamsListHeading, this.league);
    teamsListView.render();
  })
}


module.exports = LeagueView;
