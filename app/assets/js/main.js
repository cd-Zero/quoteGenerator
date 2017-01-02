
var $ = require('jquery')
$('document').onload(alert('jquery installed :)'))


var button            =  document.querySelector("#btn");
var q                 =  document.querySelector('#quote');
var tweetbutton       =  document.querySelector("#tweet");
var blockquote        =  document.querySelector('blockquote');








// button initiates XMLHttpRequest for data
button.addEventListener("click", function(e){
var random = Math.floor((Math.random() * 25) + 1)
var xhr    =  new XMLHttpRequest();
// get data
xhr.open('GET',"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+random,true);
xhr.withCredentials = true;
xhr.send(null);
  xhr.onload    = function(){
  var quoteData = JSON.parse(xhr.responseText);
  console.log(quoteData);
    // renders HTML and twitter share button info
    changetext(quoteData);

}
  xhr.send();

});





  function changetext(data){
// quote template creation
  console.log("testing");
  console.log(data);

   var rawTemplate                = document.querySelector('#quoteTemplate').innerHTML;
   var compileTemplate            = Handlebars.compile(rawTemplate);
   var generatedHTML              = compileTemplate(data[0]);
   var quoteContainer             = document.querySelector('#quote');
   quoteContainer.innerHTML       = generatedHTML;

// twitter share button
  var inject = document.querySelector('#quote').innerText;

  document.querySelector("#share").href = 'https://twitter.com/intent/tweet?text=' +inject;


}
