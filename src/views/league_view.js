const TeamsListView = require('./teams_list_view.js');
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
  this.populateList(leagueUl);
  return leagueUl;
}

LeagueView.prototype.populateList = function(list){
  const seasonDates = document.createElement('li')
  seasonDates.textContent = `Dates: ${this.league.currentSeason.startDate} to ${this.league.currentSeason.endDate}`;
  list.appendChild(seasonDates);
}

LeagueView.prototype.renderTeamsList = function(container){
  const teamsLabel = document.createElement('p');
  teamsLabel.classList.add("clickable-teams-label")
  teamsLabel.textContent = "Click to view teams";
  container.appendChild(teamsLabel);
  teamsLabel.addEventListener('click', () => {
    container.removeChild(container.lastChild);
    const teamsListView = new TeamsListView(container, this.league);
    teamsListView.render();
  })


}


module.exports = LeagueView;
