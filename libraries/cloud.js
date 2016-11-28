var noiseScale=0.0005;

function cloud(cloudCover){
  for (var x=0; x < width; x++) {

    var noiseVal = noise(frameCount * .2 + (x * 100));
    var cloudtransparent = map(cloudCover, 0, 100, 50, 200);
    stroke(255 * noiseVal, cloudtransparent);
    line(selectionX, selectionY, x, 0);
    
  }  fill('black');
    ellipse(selectionX,selectionY,10,10);
    fill('blue');
    text("Cloud Coverage: " + weatherData.clouds.all + "%", 550,height-25);
}
