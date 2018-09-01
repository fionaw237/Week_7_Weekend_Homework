const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Leagues = function(){
  this.leaguesData = null;
  this.countryNames = []
}

Leagues.prototype.bindEvents = function(){
  const request = new Request('http://api.football-data.org/v2/competitions');

  request.get((data) => {

    const allLeagues = data.competitions;
    this.leaguesData =  allLeagues.filter(league => league.plan === "TIER_ONE");
    // NOTE: this api has lots of leagues available, but only 12 free ones :(
    // console.log(this.leaguesData);
    this.countryNames = this.getCountryNames(this.leaguesData);
    PubSub.publish('Leagues:country-data-loaded', this.countryNames);
    })

    PubSub.subscribe('SelectView:change', (event) => {
      const selectedIndex = event.detail;
      const selectedCountry = this.countryNames[selectedIndex];
      const leaguesInCountry = this.getLeaguesbyCountry(selectedCountry);
      //add teams to selected leagues - I originally tried this for all 12 leagues but status 403 - too many requests at once I think.
      // console.log(leaguesInCountry);
      const leaguesIncludingTeams = this.addTeamsToSelectedLeagues(leaguesInCountry);
      // console.log(leaguesIncludingTeams);
      PubSub.publish('Leagues:league-data-ready', leaguesIncludingTeams);
      // const teamsInLeagues = this.getTeamsinLeagues(leaguesInCountry)
      // console.log(teamsInLeagues);
      // PubSub.publish('Leagues:team-data-ready', teamsInLeagues);
    })
}

Leagues.prototype.addTeamsToSelectedLeagues = function(leagues){
  leagues.forEach((league) => {
    // console.log(league);
    const teamsRequest =
     new Request(`http://api.football-data.org/v2/competitions/${league.id}/teams`);
    //  console.log(teamsRequest);
    teamsRequest.get((data) => {
      // console.log(data.teams);
      league.teams = data.teams
      // PubSub.publish('Leagues:country-data-loaded', this.countryNames);
    });
  })
  // console.log(leagues);
  return leagues;
}

Leagues.prototype.getCountryNames = function(leagues){
  const countries = leagues.map(league => league.area.name);
  const uniqueCountriesArray =
  countries.filter((country, index, self) => self.indexOf(country) === index)
  return uniqueCountriesArray
}

Leagues.prototype.getLeaguesbyCountry = function(country){
  const leaguesInCountry = this.leaguesData.filter( league => league.area.name === country)
  return leaguesInCountry;
}


module.exports = Leagues;
