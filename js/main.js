var button =  document.querySelector("#btn");
var q      =  document.querySelector('#quote')
// button initiates XMLHttpRequest for data
button.addEventListener("click", function(){
var random = Math.floor((Math.random() * 10) + 1)
var xhr    =  new XMLHttpRequest();

xhr.open('GET',"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+random,true);
  xhr.onload    = function(){
  var quoteData = JSON.parse(xhr.responseText);

    console.log(quoteData[0]);

    changetext(quoteData);



//  renderHTML(quoteData);
}
  xhr.send();

});



  function changetext(data){
  q.innerHTML = data[0].content;
  }






//id = butt, button
// id = quote, quoteblock


//console.log(q);
