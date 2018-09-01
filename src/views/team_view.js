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
  const teamImage = document.createElement('img');
  if (this.team.crestUrl) {
    teamImage.src = this.team.crestUrl;
    teamImage.width = 200;
    teamDiv.appendChild(teamImage);
  }
  const teamDetails = document.createElement('ul');

  console.log(this.team);
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



  teamDiv.appendChild(teamDetails);
  this.container.appendChild(teamDiv);
}

module.exports = TeamView;
