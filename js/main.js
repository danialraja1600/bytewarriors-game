class Player {
    constructor(){
        this.positionX = 0;
        this.positionY = 0;
        this.playerElm = document.getElementById("player");
    }
    moveLeft(){
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
}

class Obstacle{
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
    }
    moveDown(){
        this.positionY--;
    }
}

const myPlayer = new Player();
//attach event listeners
document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft"){
        myPlayer.moveLeft();
    } else if (e.key === "ArrowRight"){
        myPlayer.moveRight();

    }
});

