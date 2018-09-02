const Leagues = require('./models/leagues.js');
const SelectView = require('./views/select_view.js');
const LeagueListView = require('./views/league_list_view.js');

import Chart from 'chart.js'


document.addEventListener('DOMContentLoaded', () => {
  const leagues = new Leagues();
  leagues.bindEvents();

  const select = document.querySelector('#country-select');
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const leagueListContainer = document.querySelector('#leagues-container-left');
  const leagueListView = new LeagueListView(leagueListContainer);
  leagueListView.bindEvents();
});
