/*Sources : https://www.youtube.com/watch?v=21eSpMtJwrc : snake
            https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var : var
            https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function : function
            https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const : const 
*/
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


class SnakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

//valeurs par defauts 
let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2; 

let appleX = 5;
let appleY = 5;

let xVelocity=0;
let yVelocity=0;

let score = 0;

const gulpSound = new Audio("gulp.mp3");


//Boucle Jeu
function drawGame(){
    changeSnakePosition();
    let result = isGameOver();
    if(result){
        return;
    }

    clearScreen();
    
    checkAppleCollision();
    drawApple();
    drawSnake();

    drawScore();
    
    if(score > 5){
        speed = 9;
    }
    if(score > 10){
        speed = 11;
    }

    setTimeout(drawGame, 1000/ speed);
} 
//Reset Velocity apres la mort 
function isGameOver(){
    let gameOver = false;

    if(yVelocity ===0 && xVelocity ===0){
        return false;
    }
    
    //Mur
    if(headX < 0 ){
        gameOver = true;
    }
    else if(headX === tileCount){
        gameOver = true
    }
    else if( headY < 0){
        gameOver = true;
    }
    else if(headY === tileCount){
        gameOver = true
    }

    for(let i =0; i < snakeParts.length; i++){
        let part = snakeParts[i];
        if(part.x === headX && part.y === headY){
            gameOver = true;
            break;
        }
    }

//Game Over Dégradé
    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "50px Orbitron";

        if (gameOver) {
            ctx.fillStyle = "white";
            ctx.font = "50px Orbitron";
        
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop("0", " #237B02");
            gradient.addColorStop("0.5", "#3DB011");
            gradient.addColorStop("1.0", "#61E330");
            // Remplissage avec un dégradé 
            ctx.fillStyle = gradient;
        
            ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
          }
    
        
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
      }

    return gameOver;
}

//Score 
function drawScore(){
    ctx.fillStyle = "white";
    ctx.font = "20px Orbitron"
    ctx.fillText("Score " + score, canvas.width-100, 20);
}

function clearScreen(){
    ctx.fillStyle = '#424242';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

//Le Snake 
function drawSnake(){
    //corps du Snake
    ctx.fillStyle = 'green';
    for(let i =0; i < snakeParts.length; i++){
        let part =  snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakeParts.push(new SnakePart(headX, headY)); 
    while (snakeParts.length > tailLength){ 
        snakeParts.shift();
    }
    //tete du Snake 
    ctx.fillStyle =  'white';
    ctx.fillRect(headX * tileCount, headY* tileCount, tileSize,tileSize);


}
// plus on change de position plus le snake accelere 
function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

//La Pomme
function drawApple(){
    ctx.fillStyle = "red";
    ctx.fillRect(appleX* tileCount, appleY* tileCount, tileSize, tileSize)
}

//apres avoir mangé la pomme elle spawn aléatoirement 
function checkAppleCollision(){
    if(appleX === headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
        gulpSound.play();
    }
}

document.body.addEventListener('keydown', keyDown);

//deplacement 
function keyDown(event){
    //haut
    if(event.keyCode == 38){
        if(yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    }

    //bas
    if(event.keyCode == 40){
        if(yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
    }

    //gauche
    if(event.keyCode == 37){
        if(xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }

     //droite
     if(event.keyCode == 39){
        if(xVelocity == -1)
        return;
        yVelocity = 0;
        xVelocity = 1;
    }
}


drawGame();


