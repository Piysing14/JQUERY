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

  $('#slideup').click(function(){
    $('#text').slideUp(1000,function(){
        console.log('Done')
    })
   })

  $('#slidedown').click(function(){
    $('#text').slideDown(1000,function(){
        console.log('Done')
    })
   })

   $('#slidetoggle').click(function(){
    $('#text').slideToggle(1000,function(){
        console.log('Done')
    })
   })

   //Speed and callback parameters are optional

   $('#text').animate({
    opacity: 0.6,
    height:'150 px'
   },3000)
  

});
