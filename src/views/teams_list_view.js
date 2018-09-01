const PubSub = require('../helpers/pub_sub.js');

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
  const teamsList = document.createElement('ul');
  this.populateList(teamsList);
  return teamsList;
}

TeamsListView.prototype.populateList = function(list){
  this.league.teams.forEach((team) => {
    const listItem = document.createElement('li');
    listItem.textContent = team.name;
    list.appendChild(listItem);
  })
}

module.exports = TeamsListView;
