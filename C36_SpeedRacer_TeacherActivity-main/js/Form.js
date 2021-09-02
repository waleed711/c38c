class Form{
  constructor(){
this.inpute = createInput("").attribute("placeholder","Enter Your name")
this.title = createImg("assets/title.png")  
this.button = createButton("play")
this.greeting = createElement("h2")
}

displayelement(){
this.inpute.position(width/2-100,height/2-200)
this.inpute.class("customInput")
this.title.position(width/2-800,50)
this.title.class("gameTitle")
this.button.position(width/2-95,height/2-100)
this.button.class("customButton")
this.greeting.position(width/2-100,height/2-200)
this.greeting.class("greeting")

}

playbutton(){
this.button.mousePressed(()=>{
  this.inpute.hide()
  this.button.hide()
  this.greeting.html("welcome")

playerCount+=1
player.name = this.inpute.value()
player.index = playerCount
player.updatecount(playerCount)
player.addplayer()



})
}

display(){
  this.displayelement()
  this.playbutton()
}



}