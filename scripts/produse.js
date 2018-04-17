let photos = document.querySelectorAll(".card");
photos.forEach( function(e){
  // let aString="url(\'""background-image:"+ e.dataset.url+"\')";
  e.setAttribute("style", "background-image:url("+e.dataset.url+")");
  console.log("url("+e.dataset.url+")");
});
