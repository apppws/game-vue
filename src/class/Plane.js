import PlImg from "../images/plane.png"

class Plane {
    constructor(){
        this.img = document.createElement('img');
        this.img.src = PlImg
        this.img.width = 300
        this.img.style.position = 'absolute'
        document.body.appendChild(this.img)


        this.x = 400;
        this.y = 1300;

        this.speed = 5;

        this.img.style.left = this.x+'px'
        this.img.style.top = this.y+'px'
    }

    moveup(){
        this.y -= this.speed
        this.img.style.top = this.y+'px'
    }
    movedown(){
        this.y += this.speed
        this.img.style.top = this.y+'px'
    }

    moveleft(){ 
        this.x -= this.speed
        this.img.style.left = this.x+'px'
    }
    moveright(){
        this.x += this.speed
        this.img.style.left = this.x+'px'
    }
}

export default Plane;