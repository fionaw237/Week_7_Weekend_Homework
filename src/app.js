const Leagues = require('./models/leagues.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const leagues = new Leagues();
  leagues.bindEvents();

  const select = document.querySelector('#country-select');
  const selectView = new SelectView(select);
  selectView.bindEvents();
});
