$(document).ready(function () {
    $("p").click(function () {
      console.log("Para cicked");
      $(this).hide();
    });

    $("div").click(function () {
      console.log("div cicked"); 
      $("div").hide();
    });

    $('#pintu').click(function(){
      console.log('Pintu clicked')
    })
  });