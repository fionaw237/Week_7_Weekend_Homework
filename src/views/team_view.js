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

  if (teamDetails){
    teamDiv.appendChild(teamDetails);
  }

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

  if (this.team.founded){
    const teamFounded = document.createElement('li');
    teamFounded.textContent = `Founded in ${this.team.founded}`;
      teamDetails.appendChild(teamFounded);
  }

  if (this.team.website){
    const teamWebsite = document.createElement('li');
    teamWebsite.textContent = `Website: ${this.team.website}`;
    teamDetails.appendChild(teamWebsite);
  }

  if (this.team.clubColors){
    const teamColours = document.createElement('li');
    teamColours.textContent = `Colours: ${this.team.clubColors}`;
    teamDetails.appendChild(teamColours);
  }

  // for some reason some teams have address = "null null null"
  if (this.team.address && this.team.address != "null null null"){
    const teamAddress = document.createElement('li');
    teamAddress.textContent = `Address: ${this.team.address}`;
    teamDetails.appendChild(teamAddress);
  }

  if (this.team.phone){
    const teamPhone = document.createElement('li');
    teamPhone.textContent = `Phone: ${this.team.phone}`;
    teamDetails.appendChild(teamPhone);
  }

  return teamDetails;
}

module.exports = TeamView;
