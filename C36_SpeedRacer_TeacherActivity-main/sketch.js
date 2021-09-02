var canvas;
var backgroundImage;
var bgImg;
var database;
var gameState;
var form, player;
var playerCount = 0
var car1,car2,cars

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getstate()

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.updatestate(1)
    
  }
if(gameState === 1){
  game.play()
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
