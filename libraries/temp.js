var noiseScale=0.5;

function temp(tempOverall){
  for (var x=0; x < width; x++) {

    var noiseVal = noise(frameCount * .2 + (x * 100));
    var drawTempR = map(tempOverall, -10, 90, 0, 255);
    var drawTempB = map(tempOverall, -10, 90, 255, 0);
    stroke(drawTempR, 0, drawTempB, noiseVal * 200);
    line(selectionX, selectionY, x, height-100);    

  }
    fill('black');
    ellipse(selectionX,selectionY,10,10);
    fill((tempOverall * 3), 0, 0);
    text("Temp in Fahrenheit: " + weatherData.main.temp + " °F",550,height-50);
}
