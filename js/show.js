var parse = function () {
  var params = {};
  var location = document.location.search;
  var item = location.replace("?", "");
  var array = item.split("&");
  for (var i=0; i < array.length; i++){
    var info = array[i].split("=");
    params[info[0]]=info[1];
  }
  return params;
};

var queryParams = parse();

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?i=' + queryParams.fraggle);
xhr.addEventListener('load', function (){
  console.log(xhr.response);
  var div = document.getElementById('moreInfo');
  var om = JSON.parse(xhr.responseText);
  // console.log(reddit);// JSON.parse(xhr.response)
  // createElement....
  div.innerHTML = ("Movie Information:"+ "<br>" + "Title: " + om.Title + "<br>" + "Year: " + om.Year + "<br>" + "Rating: " + om.Rated);
});
xhr.send();
