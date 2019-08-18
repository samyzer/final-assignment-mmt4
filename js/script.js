$(document).ready(function () {
  var geklikt = false;
  var player = videojs('video1', {
  });

  $(".toggle1").click(function () {
      event.preventDefault();
      if ( $( this ).is( "#toggle1" ) ) {
        player = videojs('video1', {

        }); 
      }

    if (geklikt == false) {
          player.play();
          geklikt = true;
          $( this ).css({ "background-image": "url(img/buttons/pause@2x.png)" });

      } else {
          player.pause();
          geklikt = false;
          $( this ).css({ "background-image": "url(img/buttons/play@2x.png)" });
      }
      console.log(geklikt);
  });

  $(".rewind").click(function () {
      player.currentTime(player.currentTime() - 10);
  });

  $(".buttonfooter" ).click(function() {
    $( "#toggle" ).toggle( "slide" );
  });

  $(".togglebutton1" ).click(function() {
    $( "#toggle" ).toggle( "slide" );
  });
})

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

function updateP5() {
  offsetDriehoekKleur = 0;
  offsetAchtergrondKleur = 0;
  maxDriehoeken = 10;
}

$( function() {
  $( "#slider1" ).slider(); {
    offsetDriehoekKleur =5;
  }
} );

$( function() {
  $( "#slider2" ).slider(); {
    offsetAchtergrondKleur = 150;
  }
} );

$( function() {
  $( "#slider3" ).slider(); {
    maxDriehoeken = 25;
  }
} );