$(document).ready(function(){
  $("#colorNav li").click(function(){
    
    if ($(this).hasClass("blueSelector")){
      $('#container').css("background-color","#282B4E");
      $('.titleLineColor').html("Nautical Blue");
      $('.shoeImg').attr('src','img/shoeblue.png');
      $('.circleBlue').attr('src','img/WhiteCircle.png');
      $('.breakdownColor').html("............ Blue");
      $('.circlePink').attr('src','img/PinkCircle.png');
      $('.circleYellow').attr('src','img/YellowCircle.png');
      $('.circleRed').attr('src','img/RedCircle.png');
    }
    else if ($(this).hasClass("pinkSelector")){
      $('#container').css("background-color","#EA2D6D");
      $('.titleLineColor').html("Neon Pink");
      $('.shoeImg').attr('src','img/shoepink.png');
      $('.circlePink').attr('src','img/WhiteCircle.png');
      $('.breakdownColor').html("Pink");
      $('.circleBlue').attr('src','img/BlueCircle.png');
      $('.circleYellow').attr('src','img/YellowCircle.png');
      $('.circleRed').attr('src','img/RedCircle.png');
    }
   else if ($(this).hasClass("yellowSelector")){
     $('#container').css("background-color","#F0B938");
     $('.titleLineColor').html("Sunshine Yellow");
     $('.shoeImg').attr('src','img/shoeyellow.png');
     $('.circleYellow').attr('src','img/WhiteCircle.png');
     $('.breakdownColor').html("Yellow");
     $('.circleBlue').attr('src','img/BlueCircle.png');
     $('.circlePink').attr('src','img/PinkCircle.png');
     $('.circleRed').attr('src','img/RedCircle.png');
   }
   else {
     $('#container').css("background-color","#BD1F2D");
     $('.titleLineColor').html("Classic Red");
     $('.shoeImg').attr('src','img/shoered.png');
     $('.circleRed').attr('src','img/WhiteCircle.png');
     $('.breakdownColor').html("........ Red");
     $('.circleBlue').attr('src','img/BlueCircle.png');
     $('.circlePink').attr('src','img/PinkCircle.png');
     $('.circleYellow').attr('src','img/YellowCircle.png');
   }
  });
});

/*
Background Color : #container {background: #282B4E;{}
Color 1 (text) : id=titleLine : <h2>Color1 // White</h2>
picture : class=shoeImg URL
circles & white circle :
color ..... xxxxxx : id=breakdown class=breakdownColor


Selected Circle:

Circle: img/WhiteCircle.png

Blue:

Background Color: #282B4E
Color 1 (text): Nautical Blue
Picture: img/shoeblue.png
Circle: img/BlueCircle.png
Color: Blue

Pink:

Background Color: #EA2D6D
Color text: Neon Pink
Picture: img/shoepink.png
Circle: img/PinkCircle.png
Color: Pink


Yellow:

Background Color: #F0B938
Color text: Sunshine Yellow
Picture: img/shoeyellow.png
Circle: img/YellowCircle.png
Color: Yellow


Red:

Background Color: #BD1F2D
Color text: Classic Red
Picture: img/shoered.png
Circle: img/RedCircle.png
Color: Red


$('body').css("background-color","#hexcode");
$('.titleLineColor').html("text in here");
$('.shoeImg').html("text in here");
$('li .img').html("text in here");
$('span .breakdownColor').html("text in here");

$('div').html("text in here");

$("div").css("background-color","#hexcode");





$(document).ready(function(){
  $('#colorNav li').on('click', function(){
    if($(this).hasClass('blueSelector')){}
    else if($(this).hasClass('pinkSelector')){}
   else if($(this).hasClass('yellowSelector')){}
   else ($(this).hasClass('redSelector')){}
  });
});

*/
