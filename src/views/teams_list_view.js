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

// ------------------------------------

  // const chart = document.createElement('canvas');
  // chart.classList.add('myChart');
  // console.log(this.league);
  //
  //
  // var data = [22006299,	15834918,	14919501,	14797756,	14433147,	13524139,	11877109,	11862073,	11779606, 10452000]; // Add data values to array
  //
  // var labels = ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"]; // Add labels to array
  //
  // var myChart = new Chart(chart, {
  //   type: 'bar',
  //   data: {
  //     labels: labels,
  //     datasets: [{
  //       label: 'Population', // Name the series
  //       data: data, // Specify the data values array
  //       backgroundColor: [ // Specify custom colors
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [ // Add custom color borders
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1 // Specify bar border width
  //     }]
  //   },
  //   options: {
  //     responsive: true, // Instruct chart js to respond nicely.
  //     maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height
  //   }
  // });
  //
  //
  //
  // teamsListDiv.appendChild(chart);

//-------------------------------------




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
