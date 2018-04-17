$( document ).ready(function() {
  $('.modal').modal('hide');
  var btn = $('.nav-toggle');
  var nav = $('.navbar-nav');
  var navv = $('.navbar');

  $('.image-showcase').on("click",function(){
    var source= $(this).children().first().attr("src");
    var title= $(this).children().first().attr("alt");
    var desc= $(this).children().first().attr("desc");

    $( ".modal" ).modal('show');
    $('.modal-title').text(title);
    $('.modal-image').attr('src',source);
    $('.modal-text').text(desc);
  });
  $( window ).resize(function() {
    if($( window ).width()>580){
        nav.css('display','flex');}
    if($( window ).width()<=580){
          nav.css('display','none');
        }
    });

  // var w=$(window);
  // w.on("scroll",function(){
  //   var scrolled = w.scrollTop();
  //   var valid = scrolled>400 ? true : false;
  //   if(valid){
  //     navv.css({
  //       "height":"3em",
  //     },function(){});
  //   }else{
  //     navv.css({
  //       "height":"4em",
  //     });
  //   }
  //
  // });



  btn.on('click',function(){
    nav.toggle({
      "duration":200,
    });

  });
});
