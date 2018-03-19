$( document ).ready(function() {
  $('.modal').modal('hide');
  var btn = $('.nav-toggle');
  var nav = $('.navbar-nav');

  $('.image-showcase').on("click",function(){
    var source= $(this).children().first().attr("src");
    var title= $(this).children().first().attr("alt");
    var desc= $(this).children().first().attr("desc");

    $( ".modal" ).modal('show');
    $('.modal-title').text(title);
    $('.modal-image').attr('src',source);
    $('.modal-text').text(desc);
  });

  btn.on('click',function(){

    nav.toggle({
      "duration":200,
    });
  });
  $( window ).resize(function() {
    nav.
  });

});
