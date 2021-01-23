//Create variables here
var dog,dogImg,happyDog,database,foods,foodStock;
var feed,addFood;
var feedTime,lastFeed;
var foodObj;

function preload()
{
  //load images here
  dogImg = loadImg("images/dog-removebg-preview.png");
  happyDog = loadImg("images/happyDog-removebg-preview.png");
}

function setup() {
database = firebase.database();
createCanvas(800, 700);

foodObj = new Food();

dog = createSprite(800,320,150,150);
dog.addImage(dogImg);
dog.scale=0.2;

feed = createButton("feed jack");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood = createButton("Add food");
addFood.position(800,95);
addFood.mousePressed(addfoods);
}

function draw() {  

  fedTime = database.ref("fed time");
  fedTime.on("value",function(data){
    lastfed = data.val();
  })

  fill(255);
  textSize(20);
  if (lastfed >= 12){
    text("lastfed :"+ lastfed % 12 + "PM",350,30);
  }else if(lastfed == 0){
    text("last feed : 12AM",350,30)
  }else{
    text("last feed : "+lastfeed + "AM",350,30);
  }

  foodObj.display();
  drawSprites();
}



function readStock(data){
foods=data.val();
foodObj.updateFoodStock(foods);
}

function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    food : foodObj.getFoodStock(),
    FeedTime: HTMLSourceElement()
  })
}



