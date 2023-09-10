const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("sun" , "png");
  pScope.load_image_sequence("lanternRelease", "png", 25);
  pScope.load_image("lantern" , "png");
  pScope.load_image("cloud" , "png");

}

function setup_layers(pScope){
 new PLayer(null, 14, 16, 61);  //lets us draw the whole circle background, ignoring the boundaries

 
 var ringFour = new PLayer(fourthRing);
 ringFour.mode(RING);
 ringFour.set_boundary(900, 1000);

 var ringThree = new PLayer(thirdRing);
 ringThree.mode(RING);
 ringThree.set_boundary(750, 900);

 var ringTwo = new PLayer(secondRing);
 ringTwo.mode(RING);
 ringTwo.set_boundary(600, 750);

 var ringOne = new PLayer(firstRing);
 ringOne.mode(RING);
 ringOne.set_boundary(400, 600);

  var lanternSequence = new PLayer(release);
  lanternSequence.mode(RING);
  lanternSequence.set_boundary( 200, 1000 );

  var lanternImage = new PLayer(lantern);
  lanternImage.mode(SWIRL(8));
  lanternImage.set_boundary( 350, 800 );

  //var cloudImage = new PLayer(cloud);
  //cloudImage.mode(RING);
  //cloudImage.set_boundary(800,100);


  var sunImage = new PLayer(sun);
  sunImage.mode(RING);
  sunImage.set_boundary(0,0);



}

//function release(x, y, animation, pScope){
  translate(x,y);
  scale(1);
  pScope.draw_image_from_sequence("lanternRelease", 0, 600, animation.frame);


//}

function fourthRing(x, y, animation, pScope){
  pScope.fill_background(14, 16, 61); //3, 41, 49, 60
}

function thirdRing(x, y, animation, pScope){
  pScope.fill_background(14, 16, 61); //16, 39, 82
  
  
}

function secondRing(x, y, animation, pScope){
  pScope.fill_background(14, 16, 61); //27, 55, 107
  
}

function firstRing(x, y, animation, pScope){
  pScope.fill_background(14, 16, 61); //10, 41, 99
  
}


function lantern(x, y, animation, pScope){
  scale(0.08);
 
  
   scale(2*animation.frame);
 
   var lanternx = animation.wave(5)*500
   pScope.draw_image("lantern",lanternx,y);
 
 
 
 }

function release(x, y, animation, pScope){
 translate(x,y-370);
 scale(1);
 pScope.draw_image_from_sequence("lanternRelease", 0, 0, animation.frame);



}

function sun(x,y,animation,pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  fill(14, 16, 61)
  arc(x,y,500,500,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  
  scale(animation.frame*2);

  pScope.draw_image("sun",x,y);

}

//function cloud(x,y,animation,pScope){
 

  translate(0,870);
  //scale(animation.wave()*1);
 scale(0.7);

 
 rotate(1*animation.frame);
 scale(2*animation.frame);

  pScope.draw_image("cloud",x,y);

//}

