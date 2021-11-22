const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var HOME =0
var BUILD=1
var INFO =2

levelValue=1

var engine,world;
var backgroundImg;
var level = 1;
var gameState = HOME;
var weight = 0;

function preload(){
    
BackgroundImg1 =loadImage("Images/BG.jpg")
startButtonImg=loadImage("Images/StartButton.png")
gameTitleImg=loadImage("Images/Game Title.png")
HowToPlayImg=loadImage("Images/HowToPlayImage.png")
UserImg=loadImage("Images/UserIcon.png")
CameraImg=loadImage("Images/CamIcon.png")
DoneImg=loadImage("Images/DoneIMG.png")
DeleteImg=loadImage("Images/DeleteImg.jpg")
RectangleImg=loadImage("Images/Rectangle.png")
GreyImg=loadImage("Images/Grey.jpg")
}
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create()
    world=engine.world;

   AngledBar=new AngledProp(width/8,height/1-400,100,-PI/7)

    // HorizontalBar= new Prop(width/8+200,height/1-60,100)

 

     // console.log( mousePressedOver(startButton))
//     if(level===1 && mousePressedOver(startButton)){
//         gameState=BUILD;
//         console.log("Succec")
//         background(BackgroundImg1)
//     console.log(windowWidth/2)
 
    
  

//     // console.log(mousePressedOver)
//     // if(mousePressedOver(VerticalProp) && mousePressedOver(Box1)){
//     //     console.log("Succec")
//     // }
  

  
  
 

//     }
   

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

    
    // HorizontalBar.display()


    if(gameState === HOME){
        fill("Cyan")
        stroke("Cyan")
        textSize(30)
        text("Level:"+levelValue,width/2-50,height/4-30)
        backgroundImg ="Navy"
     
        form = new Form();
        form.display();
    
    }
    if(gameState === BUILD){
     text("Weight:" + weight,width/2+300,height/1-60)
     backgroundImg=loadImage(BackgroundImg1)
     AngledBar.display()

     form.hide()
    }
    
    if(gameState === INFO){


        // startButton.visible=false;
        // gameTitle.visible=false;
        // HowToPlay.visible=false;
        // UserIcon.visible=false;
   

 Info()
    

    }
  function Info(){

    

      fill("Black")
      stroke("Black")
      textSize(30)
      console.log("Test Succecfull")
      text("Click on the Start Butoon on the bottom of you're screen to start",width/2-200,height/8+50)
      text("",width/2-600,height/8+400)
      text("Click on the Start Butoon on the bottom of you're screen to start",width/2-200,height/8+50)
      text("Getting Started",width/2,height/8)
      text("Building",width/2,height/8+600)
      
     
      
  }
}
// console.log("Succec")
// console.log(mousePressedOver(HowToPlay))
// if(mousePressedOver(HowToPlay)){
//     gameState=INFO;
//     console.log("Test Succecfull")
// }


// function RecycleBin(){
    // //    VerticalProp1.visible=false;
    // //    HorizontalProp1.visible=false;
    // //    LeftAngualerProp1.visible=false;
    // //    RightAngularProp1.visible=false;
    
    // //    }