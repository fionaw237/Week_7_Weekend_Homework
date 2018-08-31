const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Leagues = function(){
  this.leaguesData = null;
}

Leagues.prototype.bindEvents = function(){
  const request = new Request('http://api.football-data.org/v2/competitions');

  request.get((data) => {
    console.log(data.competitions);
    // this.leaguesData = data;
    // Pubsub.publish('Leagues:data-loaded', this.leaguesData);
  })

}

module.exports = Leagues;
