var button            =  document.querySelector("#btn");
var q                 =  document.querySelector('#quote');
var tweetbutton       =  document.querySelector("#tweet");
var blockquote        =  document.querySelector('blockquote');








// button initiates XMLHttpRequest for data
button.addEventListener("click", function(e){
var random = Math.floor((Math.random() * 25) + 1)
var xhr    =  new XMLHttpRequest();

xhr.open('GET',"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+random,true);
  xhr.onload    = function(){
  var quoteData = JSON.parse(xhr.responseText);

    changetext(quoteData);

//  renderHTML(quoteData);
}
  xhr.send();

});




//creates button
  function changetext(data){
  //q.innerHTML   = data[0].content;
  console.log("testing");
  console.log(data);

   var rawTemplate                = document.querySelector('#quoteTemplate').innerHTML;
   var compileTemplate            = Handlebars.compile(rawTemplate);
   var generatedHTML              = compileTemplate(data[0]);
   var quoteContainer             = document.querySelector('#quote');
   quoteContainer.innerHTML       = generatedHTML;

  var inject = document.querySelector('#quote').innerText;

   document.querySelector("#share").href = 'https://twitter.com/intent/tweet?text=' +inject;


}
