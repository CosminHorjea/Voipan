$( document ).ready(function() {
  $('.modal').modal('hide');

  $('.image-showcase').on("click",function(){
    var source= $(this).children().first().attr("src");
    var title= $(this).children().first().attr("alt");

    $( ".modal" ).modal('show');
    $('.modal-title').text(title);
    $('.modal-image').attr('src',source);
  });

});
