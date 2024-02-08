var floor_1, floor_2, floor_3;
var soldier1, soldier2, soldier3;
var soldier1_img, soldier2_img, soldier3_img;
var gameState = 0;
var homeScreen, levelScreen, level1_img;
var level;
var robber, robber_img;
var vel_x, vel_y;
var bullet_img;
var bullet_pos = "front";


function preload(){
    floor_1 = loadImage("assets/ground floor.jpg");
    floor_2 = loadImage("assets/first-floor.jpg");
    floor_3 = loadImage("assets/master-bedroom.jpg");
    soldier1_img = loadImage("assets/soldier with gun.png");
    soldier2_img = loadImage("assets/top-view_holding-gun.jpg");
    soldier3_img = loadImage("assets/top-view_holding-knife.jpg");
    homeScreen = loadImage("assets/home-screen.jpg");
    levelScreen = loadImage("assets/game-levels.jpg");
    level1_img = loadImage("assets/game-levels_1.png");
    robber_img = loadImage("assets/robber-top-view.png")
    bullet_img = loadImage("assets/bullet.png")
}

function setup(){
    createCanvas(850, 750); 
    soldier1 = createSprite(520, 600,150,150);
    soldier1.visible = false;
    console.log(robber);
    vel_x = random(-1, 1);
    vel_y = random(-1, 1);
}

function draw(){
    if(gameState == 2){
        soldier1.visible = true;
        soldier1.addImage("soldier1", soldier1_img);
        soldier1.scale = 0.3;
        robberSpawn();
        if(keyDown("space")){
            bullet = createSprite(soldier1.position.x, soldier1.position.y, 3, 3);
            bullet.addImage("bullet", bullet_img);
            bullet.scale = 0.02;
            if(soldier1.rotation = -90){
                bullet.rotation = -90
                bullet.velocity.x = 4;
            }
            if(soldier1.rotation = 0){
                bullet.rotation = 0
                bullet.velocity.y = 4;
            }
            if(soldier1.rotation = 90){
                bullet.rotation = 90
                bullet.velocity.x = -4;
            }
            if(soldier1.rotation = 180){
                bullet.rotation = -90
                bullet.velocity.y = -4;
            }
        }

        /*if(robber.position.x > 800 || robber.position.x < 50){
            if(robber.velocity.x < 0){
                robber.velocity.x = 1;
            }
            else if(robber.velocity.x > 0){
                robber.velocity.x = -1;
            } 
        }
        if(robber.position.y > 450 || robber.position.y < 50){
            if(robber.velocity.y < 0){
                robber.velocity.y = 1;
            }
            else if(robber.velocity.y > 0){
                robber.velocity.y = -1;
            }  
        }*/

    }
    
    if(keyDown(LEFT_ARROW)){
        console.log("Left arrow");
        soldier1.rotation = -90;
        console.log(soldier1);
        soldier1.position.x -= 3;
        bullet_pos = "left";
    }
    if(keyDown("RIGHT_ARROW")){
        soldier1.rotation = 90;
        console.log("RIGHT_ARROW");
        soldier1.position.x += 3;
        bullet_pos = "right";
    }
    if(keyDown(UP_ARROW)){
        soldier1.rotation = 0;
        soldier1.position.y -= 3;
        bullet_pos = "straight";
    }
    if(keyDown(DOWN_ARROW)){
        soldier1.rotation = 180;
        soldier1.position.y += 3;
        bullet_pos = "back";
    }

    if(gameState == 0){
        background(homeScreen);
        textSize(30);
        textStyle("bold");
        fill("white");
        text("Home Invasion", 320, 40);
        text("PLAY", 388, 400);
    }
    else if(gameState == 1){
        background(level1_img);
        textSize(30);
        textStyle("bold");
        fill("darkred");
        text("LEVEL 1", 50, 100);
        fill("orange");
        text("LEVEL 2", 265, 100);
        fill("brown");
        text("LEVEL 3", 475, 100);
        fill("lightgreen");
        text("LEVEL 4", 680, 100);
    }
    else if(gameState == 2){
        background(floor_1);
        

    }

    if(level == 2){
        background(floor_2);
    }
    else if(level == 3){
        background(floor_3);
    }
    drawSprites();
}

function mousePressed(){
    if(gameState == 0){
        gameState = 1;
        level = 0;
    }
    else if(gameState == 1){
        gameState = 2;
    }
    else if(gameState == 2){
        level = 1;
    }
    else if(gameState == 3){
        level = 2;
    }

}

function robberSpawn(){
    if (frameCount % 300 == 0){
    robber = createSprite(random(50, 800), random(50, 450), 50, 50);
    robber.visible = true;
    robber.addImage("robber", robber_img);
    robber.scale = 0.05;
    robber.rotation = 180;
    }
}