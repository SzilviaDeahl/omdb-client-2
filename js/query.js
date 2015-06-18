var h1 = document.createElement('h1');
h1.innerHTML = "OMDB Search";
document.body.appendChild(h1);

var xhr = new XMLHttpRequest;
var xhr.open =('get', 'http://www.omdbapi.com/?i=');
xhr.addEventListener('load', function(){
  var response = xhr.response;
  var responseData = JSON.parse(xhr.response);
  console.log(responseData);
  for (var i=0; i=responseData.Search.length; i++){

  var a = document.createElement('a');
  a.innerHTML = responseData.Search[i].Title;
  a.href = '/search.html?fraggle=' + responseData.Search[i].imdbID;

  var p = document.createElement('p');
  p.appenchild(a);
  document.body.appenchild(p);
  }
});
xhr.send();
