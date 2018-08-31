const Leagues = require('./models/leagues.js')

document.addEventListener('DOMContentLoaded', () => {
  const leagues = new Leagues();
  leagues.bindEvents();
});
