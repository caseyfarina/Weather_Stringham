var noiseScale = 0.5;
function wind(windSpeed){
  for (var x=0; x < height-100; x++) {
    //randomSeed(x * 1000)
    var noiseVal = noise(frameCount * .2 + (x * 100));
    stroke(noiseVal, 60);
    line(selectionX, selectionY, width, x);    
    line(0, x, selectionX, selectionY);
  }
    fill('black');
    ellipse(selectionX,selectionY,10,10);
    fill(random((frameCount/windSpeed)+200),60);
    text("Wind Speed in MPH: " + weatherData.wind.speed,550,height-75);
}

