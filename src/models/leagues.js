const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Leagues = function(){
  this.leaguesData = null;
}

Leagues.prototype.bindEvents = function(){
  const request = new Request('http://api.football-data.org/v2/competitions');

  request.get((data) => {
    this.leaguesData = data.competitions;
    const countryNames = this.getCountryNames(this.leaguesData);
    PubSub.publish('Leagues:country-data-loaded', countryNames);
    })
}

Leagues.prototype.getCountryNames = function(leagues){
  const countries = leagues.map(league => league.area.name);

  const uniqueCountriesArray =
  countries.filter((country, index, self) => self.indexOf(country) === index)

  return uniqueCountriesArray
}

module.exports = Leagues;
