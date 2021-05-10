class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
        }
        this.image = loadImage("images/Walking Frame/walking_1.png")
        this.rain = Bodies.circle(x,y,50,options)
        World.add(world,this.rain)
    }
   

            
            
        

    
    display(){
        
        imageMode(CENTRE)
        image(this.image,this.rain.position.x,this.rain.position.y,300,300)
    }
}