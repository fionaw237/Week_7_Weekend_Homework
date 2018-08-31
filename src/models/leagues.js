const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Leagues = function(){
  this.leaguesData = null;
  this.countryNames = []
}

Leagues.prototype.bindEvents = function(){
  const request = new Request('http://api.football-data.org/v2/competitions');

  request.get((data) => {
    this.leaguesData = data.competitions;
    this.countryNames = this.getCountryNames(this.leaguesData);
    PubSub.publish('Leagues:country-data-loaded', this.countryNames);
    })

    PubSub.subscribe('SelectView:change', (event) => {
      const selectedIndex = event.detail;
      const selectedCountry = this.countryNames[selectedIndex];
      const leaguesInCountry = this.getLeaguesbyCountry(selectedCountry);
      PubSub.publish('Leagues:league-data-ready', leaguesInCountry);
      // console.log(leaguesInCountry);
    })
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
