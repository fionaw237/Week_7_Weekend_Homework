const Request = function(url){
  this.url = url;
}

Request.prototype.get = function(onComplete){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200){
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    onComplete(data);
  });

  xhr.open('GET', this.url);
  xhr.setRequestHeader('X-Auth-Token', 'ba8bf2b524bc4f73bb5911371f301944');
  // xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
}


module.exports = Request;
