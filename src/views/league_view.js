const LeagueView = function(container, league){
  this.container = container;
  this.league = league;
}

LeagueView.prototype.render = function(){
  const leagueDiv = document.createElement('div');
  // const leagueDivHeader = this.getLeagueHeader()
  const leaguesList = this.getLeagueDetailsList();
  leagueDiv.appendChild(leaguesList);
  this.container.appendChild(leagueDiv);
}

LeagueView.prototype.getLeagueDetailsList = function(){
  const leagueUl = document.createElement('ul');
  this.populateList(leagueUl);
  return leagueUl;
}

LeagueView.prototype.populateList = function(list){
  const leagueName = document.createElement('li')
  leagueName.textContent = this.league.name
  list.appendChild(leagueName);
}

module.exports = LeagueView;
