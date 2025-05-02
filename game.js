import platform from'../images/platform.png'
import hills from'../images/hills.jpg'
import sky from'../images/sky.jpg'

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

//CONSTANTS
const gravity=0.5


//PLAYER CLASS
class Player {
    constructor() {
        this.speed = 10
        this.position= {
            x: 100,
            y: 100
        }
        this.velocity= {
            x:0,
            y:0
        }
        this.height = 30
        this.width = 30
    }
    draw() {
        c.fillStyle='red'
        c.fillRect(this.position.x,this.
            position.y,this.width,this.height)
          }
    
    update() {
        this.draw()
        this.position.x +=this.velocity.x
        this.position.y += this.velocity.y
            if(this.position.y + this.height +
                this.velocity.y <= canvas.height)
                this.velocity.y+= gravity
        
            
    }     }

//PLATFORM CLASSS
class Platform {
    constructor({x,y,image}) {
        this.position= {
            x,
            y 
        }
        this.image=image
        this.width=image.width
        this.height=image.height
        
    }
    
    draw() {
        c.drawImage(this.image, this.position.x,
          this.position.y)
    }}

//DECORATION CLASSS
class GenericObjects{
    constructor({x,y,image}) {
        this.position= {
            x,
            y 
        }
        this.image=image
        this.width=image.width
        this.height=image.height
        
    }
    
    draw() {
        c.drawImage(this.image, this.position.x,
          this.position.y)
    }
}

//IMAGE DEFINING FUNCTION
function createImage(imageSrc){
    let image = new Image()
    image.src = imageSrc
    return image

}

//DRAWING PLAYER
let player = new Player() 



//DRAWINGG PLATFORMS
let platformImage = createImage(platform)
let platforms= [new Platform({
    x:-1, y:550, image: platformImage
}), new Platform({
    x:platformImage.width-0.5, y:550, image:platformImage
}), new Platform({
    x:platformImage.width*2+230, y:550, image:platformImage
})]


// DRAWING DECORATIONS/BACKGROUND
let genericObjects = [new GenericObjects({
        x:0, y:0, image: createImage(sky)
}), new GenericObjects({
    x:0, y:330, image: createImage(hills),       
})]


//DEFINING LEFT OR RIGHT KEY PRESSED
const keys ={
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}
let scrollOffset= 0

//FUNCTION INCLUDING DRAWINGSS
function init(){

 player = new Player() 
platformImage = createImage(platform)
platforms= [new Platform({
    x:-1, y:550, image: platformImage
}), new Platform({
    x:platformImage.width-0.5, y:550, image:platformImage
}), new Platform({
    x:platformImage.width*2+230, y:550, image:platformImage
})]


genericObjects = [new GenericObjects({
        x:0, y:0, image: createImage(sky)
}), new GenericObjects({
    x:0, y:330, image: createImage(hills),       
})]

scrollOffset= 0

}


//ANIMATION
    function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach(genericObjects => {
        genericObjects.draw()
    })
    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()

    //CONDITIONS FOR MOVING THE PLAYER
    if(keys.right.pressed && player.position.x<400) {
        player.velocity.x=player.speed
    }
    else if (keys.left.pressed && player.position.x>100) {
        player.velocity.x=-player.speed
    }
    else {
    player.velocity.x=0
        if(keys.right.pressed){
            scrollOffset+=player.speed
            platforms.forEach(platform => {
            platform.position.x-=player.speed               
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x-=player.speed*0.66
            })
        } else if(keys.left.pressed){
            scrollOffset-=player.speed
            platforms.forEach(platform => {
            platform.position.x+=player.speed            
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x+=player.speed*0.66
            })
        }
    }

    //PLATFORM COLLISION LOGIC
    platforms.forEach(platform => {
    if(player.position.y + player.height + player.velocity.y
        >=platform.position.y && 
        player.position.y + player.height +
        player.velocity.y -22<= platform.
        position.y + platform.height && player.position.x +
        player.width  + player.velocity.x>= platform.position.x &&  
        player.position.x+ player.velocity.x <= platform.position.x
        + platform.width) {
        player.velocity.y = 0
    }
    if(player.position.y + player.height + player.velocity.y
        >=platform.position.y && 
        player.position.y + player.height +
        player.velocity.y -22<= platform.
        position.y + platform.height && player.position.x +
        player.width+ player.velocity.x >= platform.position.x &&  
        player.position.x + player.velocity.x<= platform.position.x
        + platform.width) {
        player.velocity.x = 0
    }
}) 
//WIN CONDITION
    if(scrollOffset > 8000){
        {alert('CONGRATULATIONS!, You Won!!.. reload to restart')      
        }
    }
//LOSE CONDITION
    if(player.position.y>canvas.height){
    init()
    }
}
animate();


//EVENT LISTENERSS
addEventListener('keydown', ({ keyCode }) =>{
    switch (keyCode) {
        case 65:
            keys.left.pressed= true
            break
        
        case 83:
            break
        case 68:
            keys.right.pressed= true
            break
        case 87:
            if(player.velocity.y==0)
            {player.velocity.y -=15}
            break
    }
})
addEventListener('keyup', ({ keyCode }) =>{
    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            break
        
        case 83:
            break
        case 68:
            keys.right.pressed= false
            break
        case 87:
            player.velocity.y -=1
            break
    }
})
