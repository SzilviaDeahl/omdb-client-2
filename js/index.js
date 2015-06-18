var h1 = document.createElement('h1');
h1.innerHTML = "OMDB Movies About Pizza";
document.body.appendChild(h1);

//new xhr
//xhr open 'get' url?
//xhr when load  (addEventListener)
//xhr send
//http://www.omdbapi.com/?s=pizza

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);
  console.log(responseData);

  for (var i=0; i<responseData.Search.length; i++){

   var a= document.createElement('a');
   a.innerHTML = responseData.Search[i].Title;
   a.href = '/show.html?fraggle=' + responseData.Search[i].imdbID;

   var p = document.createElement('p');
   p.appendChild(a);
   document.body.appendChild(p);
 }
});
xhr.send();

// search[i].imdbID
