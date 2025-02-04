$(document).ready(function () {
  $("p").on({

    click: function () {
      console.log("Clicked on ", this);
    },
    mouseleave: function () {
      console.log("mouseleft on ", this);
   
    },
  });

  $('#toggle').click(function(){
    $('#text').toggle(1000)
  })

  $('#show').click(function(){
      $('#text').fadeIn(2000)
    })
    
    $('#hide').click(function(){
      $('#text').fadeOut(200)
  })


});
