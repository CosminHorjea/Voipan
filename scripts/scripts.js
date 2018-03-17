$( document ).ready(function() {
  var url = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyD0ScpREJAM-2Y9iG8Bj1YHHg-LfArMoZs";
  $('.modal').modal('hide');

  $('.image-showcase').on("click",function(){
    var source= $(this).children().first().attr("src");
    var title= $(this).children().first().attr("alt");

    $( ".modal" ).modal('show');
    $('.modal-title').text(title);
    $('.modal-image').attr('src',source);
  });

});
