class Food{
constructor(){
    this.foodStock = 15;
    this.lastfed;
    this.image = loadImage("milk.png");
}

updateFoodStock(foodStock){
    this.foodStock=foodStock;
}
getFedTime(lastfed){
    this.lastfed = lastfed;
}

deductFood(){
    if(this.foodStock > 0)(
        this.foodStock = this.foodStock -1
    )
    return this.foodStock;
}

getFoodStock(){
    return this.foodStock;
}

display(){
    var x = 80,y = 100;

    ImageMode(CENTER);
    this.image(this.image,720,220,70,70);

    if(this.foodStock != 0){
        for(var i=0; i<this.foodStock; i++){
            if(i%10 == 0){
                x=80;
                y=y+50;
            }
            this.image(this.image,x,y,50,50);
            x=x+30;
        }
    }
}
}