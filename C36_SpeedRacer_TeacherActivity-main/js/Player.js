class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addplayer(){
    var playerindex = "players/player"+this.index
    if(this.index === 1){
      this.positionX = width/2-100
      this.positionY = height/2
   
    }
  else{
    this.positionX = width/2+100
  }

  database.ref(playerindex).set({
    name:this.name,
    positionX:this.positionX,
    positionY:this.positionY
  })

  }

getcount(){
  var playercountref = database.ref("playerCount").on("value",data => {
playerCount = data.val()
  })
}
updatecount(count){
database.ref("/")
.update({
  playerCount:count
})
}
getdistance(){
  var playerdistanceref = database.ref("players/player"+this.index).on("value",data => {
    var data = data.val()
    this.positionX = data.positionX
    this.positionY = data.positionY
  })
}
}
