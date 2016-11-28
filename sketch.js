var weatherData;
var worldMap;
var colorsCool = [];
var colorsWarm = [];
var centerX;
var centerY;
var selectionX;
var selectionY;
var mapLocationX = 0;
var mapLocationY = 0;
var mapSizeX = 1280;
var mapSizeY = 620;

function preload() {
  worldMap = loadImage("assets/Equirectangular_projection_SW.jpg");
  
}
function setup() {
  createCanvas(1280,900);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e612b8338e7737e025c704e8bebb877b&units=imperial", gotData);
  colorsCool = [color(100,0,0),color(100,50,30),color(100,100,0,60),color(100,50,0),color(100,100,0)]
  colorsWarm = [color(239,32,48),color(239,155,119),color(217,84,50),color(143,48,48),color(11,10,9)]

    
  centerX = width/2;
  centerY = height/2;
  
  
}

function gotData(data){
  //This "callback" function executes once the json has arrived
  //takes the json in the data argument and dumps it in the weatherData variable
  weatherData = data;
}

function draw() {
  background(255);
  /*var time = frameCount * 0.001;
  var up = map(noise(time),0,1,0,height);
  */
  
  image(worldMap,mapLocationX,mapLocationY,mapSizeX,mapSizeY);
  //mapImage = (mapLocationX,mapSizeX,mapLocationY,mapSizeY);
  
  ellipse(selectionX,selectionY,10,10);
  
  //if the mouse is over the map
  if(mouseX > mapLocationX &&
    mouseX < (mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
    //draw the crosshair lines
    line(mouseX,mapLocationY,mouseX,mapLocationY + mapSizeY);
    line(mapLocationX,mouseY,mapLocationX + mapSizeX,mouseY);
    textSize(20);
    //noStroke();
    fill(100,100,100,75);
    //draw the lat and long coordinates
    text(floor(map(mouseY,mapLocationY,mapLocationY + mapSizeY,90,-90)),mapSizeX+30,mouseY - 4);
    text(floor(map(mouseX,mapLocationX,mapLocationX + mapSizeX,-180,180)),mouseX - 20,mapLocationY + 20);
    
    }
  //if weatherData is undefined, then this code will not execute undefined = FALSE anything
  if(weatherData){
    noStroke();
    fill('black');
    //City Name
    text("City: " + weatherData.name,200,height-50);
    //Country Name
    text("Country: " + weatherData.sys.country,200,height-75);
    //wind speed
    text("Wind Speed in MPH: " + weatherData.wind.speed,550,height-75);
    fill('black');
    //Latitude
    text("Lat = " + weatherData.coord.lat,50,height-50);
    //Longitude
    text("Lon = " + weatherData.coord.lon,50,height-75);
    
    cloud(weatherData.clouds.all);
    temp(weatherData.main.temp);
    wind(weatherData.wind.speed);
    //wind(weatherData.wind.all,20,290);
  }
  
}

function mousePressed(){
  if(mouseX > mapLocationX &&
    mouseX <(mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
      selectionX = mouseX;
      selectionY = mouseY;
      //grab the JSON based on the new selection
      var lon = map(selectionX,mapLocationX,mapLocationX + mapSizeX, -180,180);
      var lat = map(selectionY,mapLocationY,mapLocationY + mapSizeY, 90,-90);
      var start = "http://api.openweathermap.org/data/2.5/weather?lat="
      var end = "&appid=586c247ad8d56d6dce5eaa3184b383e1&units=imperial"
      var url = start + lat + "&lon=" + lon + end;
      loadJSON(url, gotData);
      //println(mousePressed);
    }
}


