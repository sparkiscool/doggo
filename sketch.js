//Create variables here
var dog,happydog,database,foods,foodstock,dogimg,happtdogimg
function preload()
{
  //load images here
  dogimg = loadImage("images/dogimg.png")
  happydogimg = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,250,20,20)
  dog.addImage(dogimg)
  dog.scale = 1/5
  foodstock = database.ref('food')
  foodstock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW)){
  writeStock(foods)
  dog.addImage(happydogimg)
  
}



  drawSprites();
  
  //add styles here
  fill("white")
  textSize(20)
text("food left"+foods,100,100)
}

function readStock(data){
  foods = data.val()
  
}
function writeStock(x){
  if(x<0){
    x = 0
  }
  else{
    x = x -1
  }
  database.ref("/").update({
    food:x
  })
}

