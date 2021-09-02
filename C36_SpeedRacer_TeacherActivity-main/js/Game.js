class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
car1 = createSprite(width/2,height/2)
car2 = createSprite(width/2-100,height/2-100)
    player = new Player();
    playerCount = player.getcount()
  }
  getstate(){
    var gameStateref = database.ref("gameState").on("value",data => {
  gameState = data.val()
    })
  }
  updatestate(state){
  database.ref("/")
  .update({
    gameState:state
  })
  }
play(){
  text("game started",500,500)
  drawSprites()
}
}
