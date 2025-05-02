import platform from'../images/platform.png'
import hills from'../images/hills.jpg'
import sky from'../images/sky.jpg'
import bigplatformblock from'../images/bigplatformblock.png'
import spriteRunLeft from'../images/spriteRunLeft.png'
import spriteRunRight from'../images/spriteRunRight.png'
import spriteStandLeft from'../images/spriteStandLeft.png'
import spriteStandRight from'../images/spriteStandRight.png'


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
        this.height = 150
        this.width = 66
		
		this.image = createImage(spriteStandRight)
		this.frames = 0
		this.sprites = {
			stand: {
				right: createImage(spriteStandRight)
				left: createImage(spriteStandLeft)
				cropwidth = 177
				width = 66
			}, 
			run: {
				right: createImage(spriteRunRight)
				left: createImage(spriteRunLeft)
				cropwidth = 341
				width = 127.875
			}
			
			this.currentSprite = this.sprites.stand.right
		}
		
		this.currentCropwidth = 177
    }
    draw() {
			 c.drawImage(
				 this.currentSprite,
				 this.currentCropwidth * this.frames,//x axis from where to crop the image
				 0,//y axis from where to crop the image
				 this.currentCropwidth,//crop width of original
				 400,//crop height of original
				 this.position.x,
				 this.position.y,
				 this.width,
				 this.height) 
          }
    
    update() {
		this.frames++
		if(this.frames>58 && this.currentSprite == (this.
		sprites.stand.right || this.currentSprite == this.
		sprites.stand.left ))
			this.frames = 0
		if(this.frames>29 && (this.currentSprite == this.
		sprites.run.right || this.currentSprite == this.
		sprites.run.left ))
			this.frames = 0
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


//DEFINING LEFT OR RIGHT KEY PRESSED
const keys ={
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}

//CURRENT KEY FOR SPRITE PLAYER IMAGES



let scrollOffset= 0

//FUNCTION INCLUDING DRAWINGSS
function init(){
	
//DRAWING PLAYER
 player = new Player() 
 
//DRAWINGG PLATFORMS
platformImage = createImage(platform)
platforms= [new Platform({
    x:-1, y:550, image: platformImage
}), new Platform({
    x:platformImage.width-0.5, y:550, image:platformImage
}), new Platform({
    x:platformImage.width*2+230, y:550, image:platformImage
})]
// CREATE BOTTOM PLATFORMS FROM PLATBLOCKS IN THE SERVER COMPUTER
//PLATFORM BLOCKSS
//, new Platform({
 //   x:platformImage.width*2+230, y:450, image: createImage(platformblock)
//})]   ADJUST THE POSITIONs
//, new Platform({
 //   x:platformImage.width*2+230, y:450, image: createImage(bigplatformblock)
//})]   ADJUST THE POSITIONs
 
// DRAWING DECORATIONS/BACKGROUND
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
    else if ((keys.left.pressed && player.position.x>100)
		|| keys.leffet.pressed && scrollOffset==0
	&& player.position.x > 0) {
        player.velocity.x=-player.speed
    }
    else {
    player.velocity.x=0
	//OFFSET
        if(keys.right.pressed){
            scrollOffset+=player.speed
            platforms.forEach(platform => {
            platform.position.x-=player.speed               
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x-=player.speed*0.66
            })
        } else if(keys.left.pressed && scrollOffset > 0 ){
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

//SPRITE SWITCHING 
if (
	keys.right.pressed == 'right'
	lastKey == 'right' &&
	player.currentSprite
		!== player.sprite.run.right
	) {
		player.frames = 1
		player.currentSprite = player.sprite.run.right
		player.currentCropwidth = player.sprites.run.cropwidth
		player.width = player.sprites.run.width
	}   else if (
		keys.left.pressed == 'left'
		lastKey == 'left' && player.currentSprite
		!== player.sprites.run.left
	){
		player.currentSprite = player.sprite.run.left
		player.currentCropwidth = player.sprites.run.cropwidth
		player.width = player.sprites.run.width		
	}   else if (
		!keys.left.pressed == 'left'
		lastKey == 'left' && player.currentSprite
		!== player.sprites.stand.left
	){
		player.currentSprite = player.sprite.stand.left
		player.currentCropwidth = player.sprites.stand.cropwidth
		player.width = player.sprites.stand.width
	}   else if (
		!keys.right.pressed == 'right'
		lastKey == 'right' && player.currentSprite
		!== player.sprites.stand.right
	){
		player.currentSprite = player.sprite.stand.right
		player.currentCropwidth = player.sprites.stand.cropwidth
		player.width = player.sprites.stand.width
		}
	

//WIN CONDITION
    if(scrollOffset > 8000){//set the 8000 to the last platform position (maybe)
        {alert('CONGRATULATIONS!, You Won!!.. reload to restart')      
        }
    }
//LOSE CONDITION
    if(player.position.y>canvas.height){
    init()
    }
}

init();
animate();


//EVENT LISTENERSS
addEventListener('keydown', ({ keyCode }) =>{
    switch (keyCode) {
        case 65:
            keys.left.pressed= true
				lastKey = 'left'
            break
        
        case 83:
            break
        case 68:
            keys.right.pressed= true
				lastKey = 'right'
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
            break
    }
})
