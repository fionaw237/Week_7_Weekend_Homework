const TeamView = function(container, team){
  this.container = container;
  this.team = team;
}

TeamView.prototype.render = function(){
  const numberOfChildren = this.container.children;
  while (numberOfChildren.length > 0) {
    this.container.removeChild(this.container.lastChild);
  }
  const teamDiv = document.createElement('div');
  teamDiv.classList.add('team-div');

  const teamHeader = this.getTeamHeader();
  teamDiv.appendChild(teamHeader);

  const teamImage = this.getTeamImage();
  teamDiv.appendChild(teamImage);

  const teamDetails = this.getTeamDetails();

  teamDiv.appendChild(teamDetails);
  this.container.appendChild(teamDiv);
}

TeamView.prototype.getTeamHeader = function(){
  const teamHeader = document.createElement('h1');
  teamHeader.classList.add('team-header');
  teamHeader.textContent = this.team.name;
  return teamHeader;
}


TeamView.prototype.getTeamImage = function(){
  const teamImage = document.createElement('img');
  teamImage.classList.add('team-badge');
  if (this.team.crestUrl) {
    teamImage.src = this.team.crestUrl;
  }
  else {
    teamImage.src = "https://images.pexels.com/photos/52504/the-ball-sport-game-football-52504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  }
  teamImage.width = 240;
  return teamImage;
}

TeamView.prototype.getTeamDetails = function(){
  const teamDetails = document.createElement('ul');
  teamDetails.classList.add('team-details-ul');

  const teamFounded = document.createElement('li');
  teamFounded.textContent = `Founded in ${this.team.founded}`;
  const teamWebsite = document.createElement('li');
  teamWebsite.textContent = `Website: ${this.team.website}`;
  const teamAddress = document.createElement('li');
  teamAddress.textContent = `Address: ${this.team.address}`;
  const teamColours = document.createElement('li');
  teamColours.textContent = `Colours: ${this.team.clubColors}`;
  const teamPhone = document.createElement('li');
  teamPhone.textContent = `Phone: ${this.team.phone}`;

  teamDetails.appendChild(teamFounded);
  teamDetails.appendChild(teamColours);
  teamDetails.appendChild(teamWebsite);
  teamDetails.appendChild(teamAddress);
  teamDetails.appendChild(teamPhone);

  return teamDetails;
}

module.exports = TeamView;
