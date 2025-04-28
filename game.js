const canvas=document.querySelector('#canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const context=canvas.getContext('2d');
canvas.style.backgroundImage="url('../images/sky.jpg')"

total=10
// imagePath='../images/'
const platform=new Image()
platform.src="../images/platform.jpg";

const platform1=new Image()
platform1.src="../images/platform.png";

const sky=new Image()
sky.src="../images/sky.jpg";

const platformBlock=new Image()
platformBlock.src='../images/platformBlock.jpg'

const platformBlockk=new Image()
platformBlockk.src='../images/platformBlock.png'

const bigplatform=new Image()
bigplatform.src='../images/bigplatform.png'

const standRight=new Image()
standRight.src='../images/spriteStandRight.png'
const standLeft=new Image()
standLeft.src='../images/spriteStandLeft.png'
const runRight=new Image()
runRight.src='../images/spriteRunRight.png'
const runLeft=new Image()
runLeft.src='../images/spriteRunLeft.png'

platform.onload=imageLoaded();
platform1.onload=imageLoaded();
sky.onload=imageLoaded();
platformBlock.onload=imageLoaded();
platformBlockk.onload=imageLoaded();
bigplatform.onload=imageLoaded();
standRight.onload=imageLoaded();
standLeft.onload=imageLoaded();
runRight.onload=imageLoaded();
runLeft.onload=imageLoaded();



function imageLoaded(){
    total--;
    if(total==0){
        console.log('all images loaded')
    }
}



//PLATFORM
class platformMake{
    constructor(x,y,width,height){
        this.position={x:x,y:y}
        this.width=width;
        this.height=height;
    }
    draw(){
        context.fillStyle='blue';
        context.fillRect(this.x,this.y,this.width,this.height);

    }
}


function platDraw(){
    let modifiedWidth=platform.width*0.9;
    let modifiedHeight=platform.height*0.9;
    for(let i=0;i<7;i++)
    {   //FLOOR PLATFORM
        context.drawImage(platform,modifiedWidth,550,modifiedWidth,modifiedHeight);
    context.drawImage(platform1,modifiedWidth*i,550,modifiedWidth,modifiedHeight);
    context.drawImage(platform,modifiedWidth*i,550,modifiedWidth,modifiedHeight);}
    
    
        //PLATFORM HEIGHTED OR ADDITIONAL FLOORS
    context.drawImage(platformBlock,200,345,60,65);
    context.drawImage(platformBlockk,250,345,60,65);
    context.drawImage(platformBlock,300,345,60,65);
    context.drawImage(platformBlockk,350,345,60,65);

    context.drawImage(bigplatform,550,460,190,200);



}



//PLAYERR DEFINING CLASSS
class player{
    constructor()
    {
        this.position={};
        this.velocity={};
        this.position.x=50;
        this.position.y=450;
        this.velocity.x=0;
        this.velocity.y=3;
        this.height=75;
        this.width=40;
        this.gravity=0.5;
        this.frames=1;
        this.keyPressed='Right';
    }






    //DRAWING PLAYER  
    draw() 
    {     if(this.velocity.x==0  && this.keyPressed=='Right')
        {context.drawImage(standRight,177*this.frames,0,177,400,this.position.x,this.position.y,this.width,this.height)}
        if(this.velocity.x==0 && this.velocity.y==0 && this.keyPressed=='Left')
        {context.drawImage(standLeft,177*this.frames,0,177,400,this.position.x,this.position.y,this.width,this.height)}
        if(this.velocity.x>0)
        {context.drawImage(runRight,340*this.frames,0,338,400,this.position.x,this.position.y,75,this.height+2)
        this.keyPressed='Right';
        }
        if(this.velocity.x<0)
        {context.drawImage(runLeft,340*this.frames,0,338,400,this.position.x,this.position.y,75,this.height+2)
         this.keyPressed='Left';
        }
    }






    //MOVEMENTS OF THE PLAYER
    playerMovement(){
        this.frames++;
        if(this.frames>24)
        {
            this.frames=1;
        }

        if((this.position.y+this.height+this.velocity.y)>=canvas.height-platform.height*0.9+7.5)
            {
                this.velocity.y=0;
            }
        
        else 
            this.velocity.y+=this.gravity;  



        //PLATFORM STOP LOGIC
        for (let i=0;i<platforms.length;i++)
        {if((this.position.x+this.width+this.velocity.x>=platforms[i].position.x)&&
        (this.position.x+this.width+this.velocity.x<=platforms[i].position.x+platforms[i].width)
        &&(this.position.y+this.height+this.velocity.y>=platforms[i].position.y)
        &&(this.position.y+this.height-55+this.velocity.y<=platforms[i].position.y+platforms[i].height)
    ){this.velocity.y=0}

        if((this.position.x+this.width+this.velocity.x>=platforms[i].position.x)
        &&(this.position.x+this.width+this.velocity.x<=platforms[i].position.x+platforms[i].width)
        &&(this.position.y+this.height+this.velocity.y>=platforms[i].position.y)
        &&(this.position.y+this.height-55+this.velocity.y<=platforms[i].position.y+platforms[i].height)
        )
            { this.velocity.x=0;
            
            }
            }
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
        
        this.draw();
        

    }

}



//EVENT HANDLING
addEventListener('keydown',function(e){


   if(e.key=='ArrowUp'&& hero.velocity.y==0)
        hero.velocity.y=-16;

   else if(e.key=='ArrowRight'){
    hero.velocity.x=2;
        
    }

    else if(e.key=='ArrowLeft' && hero.position.x<10) { 
        hero.velocity.x=0;
        
    }

    else if(e.key=='ArrowLeft' && hero.position.x>50){
            hero.velocity.x=-2;
            
        }
    });

addEventListener('keyup',function(e){
    if(e.key=='ArrowRight')
        {hero.velocity.x=0;
        offset=0;
        
         
        }
    if(e.key=='ArrowLeft')
        {hero.velocity.x=0;
            offset=0;
        }
})




//MAIN LOGIC
//PLATFORMMS
let platforms=[]
addEventListener('DOMContentLoaded', function(){
const platformq= new platformMake(200,350,235,70);
platforms.push(platformq);
const platformw=new platformMake(550,464,220,300)
platforms.push(platformw);
gameAnimate();

});

//DRAWING PLAYER
const hero=new player();
hero.draw();




//ANIMATION
function gameAnimate(){
    requestAnimationFrame(gameAnimate);
    context.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<platforms.length;i++)
    {platforms[i].draw();}
    platDraw();
    hero.playerMovement();

    
}





function gameAnimate(){
    requestAnimationFrame(gameAnimate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update offsets
    if(hero.position.x >= 400 && hero.velocity.x > 0){
        offset += hero.velocity.x;
    } else if(hero.position.x <= 100 && hero.velocity.x < 0){
        offset += hero.velocity.x;
    } else {
        hero.position.x += hero.velocity.x;
    }
    
    backgroundOffset = offset * 0.5; // Background moves slower

    // Draw background
    context.drawImage(sky, -backgroundOffset, 0, canvas.width * 2, canvas.height);

    // Draw platforms
    for(let i=0;i<platforms.length;i++) {
        platforms[i].draw();
    }
    platDraw();

    // Move player
    hero.playerMovement();
}


