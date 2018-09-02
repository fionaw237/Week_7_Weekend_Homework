const PubSub = require('../helpers/pub_sub.js');
const TeamView = require('./team_view.js')

const TeamsListView = function(container, league){
  this.container = container;
  this.league = league;
}

TeamsListView.prototype.render = function(){
  const teamsListDiv = document.createElement('div');
  teamsListDiv.classList.add("teams-list-div");
  const teamsList = this.getTeamsList();
  teamsListDiv.appendChild(teamsList);
  this.container.appendChild(teamsListDiv);
}

TeamsListView.prototype.getTeamsList = function(){
  const teamsList = document.createElement('ol');
  this.populateList(teamsList);
  return teamsList;
}

TeamsListView.prototype.populateList = function(list){
  this.league.teams.forEach((team) => {
    const listItem = document.createElement('li');
    listItem.classList.add('team-list-item');
    listItem.textContent = team.name;
    list.appendChild(listItem);
    const leaguesContainerRight = document.querySelector('#leagues-container-right');
    listItem.addEventListener('click', () => {
      const teamView = new TeamView(leaguesContainerRight, team);
      teamView.render();
    })
  })
}

module.exports = TeamsListView;
