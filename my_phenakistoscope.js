const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("sun" , "png");
  pScope.load_image_sequence("lanternRelease", "png", 26);
  pScope.load_image("lantern" , "png");
  pScope.load_image("stars" , "png");

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

  var lanternSequence = new PLayer(release); //people releasing lantern sequence
  lanternSequence.mode(RING);
  lanternSequence.set_boundary( 200, 1000 );


  var starImage = new PLayer(stars); //shaped stars rotating at top of PScope
  starImage.mode(RING);
  starImage.set_boundary(950,20);

  var starsStay = new PLayer(stillStars) //still, plain white circle stars with no animation
 starsStay.mode (RING);
 starsStay.set_boundary (950, 20);

  var starsColor = new PLayer(animatedStars) //colour changing circle stars
 starsColor.mode (RING);
 starsColor.set_boundary (950, 20);

 var lanternImage = new PLayer(lantern); //lanterns going out
 lanternImage.mode(SWIRL(8));
 lanternImage.set_boundary( 420, 1100 );

  var sunImage = new PLayer(sun); // centre sun
  sunImage.mode(RING);
  sunImage.set_boundary(0,0);



}

function fourthRing(x, y, animation, pScope){
  pScope.fill_background(14, 16, 61); //3, 41, 49, 60
}

function thirdRing(x, y, animation, pScope){
  pScope.fill_background(14, 16, 61); //16, 39, 82
}

function secondRing(x, y, animation, pScope){
  pScope.fill_background(16, 39, 82); // 
}

function firstRing(x, y, animation, pScope){
  pScope.fill_background(14, 16, 61); //10, 41, 99
}



function stillStars(x,y,animation,pScope){
  scale(animation.wave*1);
   noStroke();
   fill(255);
   ellipse(10, 950, 15, 15); //draws circle
   ellipse(90, 980, 15, 15); //draws circle
   ellipse(-90, 880, 15, 15); //draws circle
   ellipse(-50, 900, 15, 15); //draws circle
   ellipse(-300, 820, 15, 15); //draws circle
   ellipse(-230, 950, 15, 15); //draws circle
   ellipse(-200, 880, 15, 15); //draws circle
  }


function animatedStars(x,y,animation,pScope){
  
 let StartColour = color(14, 16, 61);  //navy
 let endColour = color(255); //white
  let animatingColour = lerpColor(StartColour, endColour, animation.frame);

  translate(70, -40);
  scale(animation.wave*50);
  noStroke();
  fill(animatingColour);
  ellipse(10, 950, 15, 15); //draws circle
  ellipse(90, 980, 15, 15); //draws circle
  ellipse(70, 920, 15, 15); //draws circle
  ellipse(-90, 880, 15, 15); //draws circle
  ellipse(30, 850, 15, 15); //draws circle
  ellipse(-50, 900, 15, 15); //draws circle
  ellipse(-100, 820, 15, 15); //draws circle
  ellipse(-300, 820, 15, 15); //draws circle
  ellipse(-280, 920, 15, 15); //draws circle
  ellipse(-260, 850, 15, 15); //draws circle
  ellipse(-230, 950, 15, 15); //draws circle
  ellipse(-200, 880, 15, 15); //draws circle
  ellipse(300, 820, 15, 15); //draws circle
  ellipse(300, 820, 15, 15); //draws circle
  ellipse(-30, 850, 15, 15); //draws circle
 }


function stars(x,y,animation,pScope){
 translate(220,995);
 scale(0.5);
 rotate(180*animation.frame);

  pScope.draw_image("stars",x,y);
}



function lantern(x, y, animation, pScope){
  scale(0.08);
   scale(2.2*animation.frame);
   translate(x+50, y);
   var lanternx = animation.wave(5)*600
   pScope.draw_image("lantern",lanternx,y);
 }

function release(x, y, animation, pScope){
 translate(x,y-370);
 scale(0.12);
 pScope.draw_image_from_sequence("lanternRelease", 0, 0, animation.frame);
}

function sun(x,y,animation,pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  fill(14, 16, 61)
  arc(x,y,500,500,backgroundArcStart,backgroundArcEnd);
  scale(animation.frame*2);
  pScope.draw_image("sun",x,y);

}
