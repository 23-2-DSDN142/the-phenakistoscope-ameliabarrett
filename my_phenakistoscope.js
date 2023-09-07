const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("lanternRelease", "png", 25);
  pScope.load_image("lantern" , "png");
  pScope.load_image("sun" , "png");
  pScope.load_image("cloud" , "png");

}

function setup_layers(pScope){
 new PLayer(null, 14, 16, 61);  //lets us draw the whole circle background, ignoring the boundaries

 
 var sunImage = new PLayer(sun);
 sunImage.mode(RING);
 sunImage.set_boundary (0, 800);
 
 var cloudImage = new PLayer(cloud);
 cloudImage.mode(RING);
 cloudImage.set_boundary (800, 2000);


  var lanternSequence = new PLayer(release);
  lanternSequence.mode(RING);
  lanternSequence.set_boundary( 200, 1000 );

  var lanternImage = new PLayer(lantern);
  lanternImage.mode(SWIRL(8));
  lanternImage.set_boundary( 0, 500 );




}


function release(x, y, animation, pScope){
  translate(x,y);
  scale(1);
  pScope.draw_image_from_sequence("lanternRelease", 0, 600, animation.frame);


}

function lantern(x, y, animation, pScope){
  scale(0.24);
  var lanternx = animation.wave(1)*200
  pScope.draw_image("lantern",lanternx,y);
   

}

function sun(x, y, animation, pScope){
  scale(1);
  var sunx = animation.frame //wave(1)*200
  pScope.draw_image("sun",sunx,y);
   

}


function cloud(x, y, animation, pScope){
  scale(1);
  pScope.draw_image("cloud",x,y);

}