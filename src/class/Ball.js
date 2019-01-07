import BaImg from "../images/4.png"
class Ball {

    constructor(x = 0, y = 0, speed = 5) {
            this.ball = document.createElement('img');
            // console.log(this.ball);
            this.ball.src = BaImg
            this.ball.classList.add('ball')
            this.ball.width = 50
            this.ball.style.position = 'absolute'
            document.body.appendChild(this.ball)
            this.x = x;
            this.y = y;

            this.ball.style.left = this.x + 'px';
            this.ball.style.top = this.y + 'px';
            // 向右    -1 向左
            this.left = 1;
            // 向下    -1 向上
            this.tops = 1;

            // 速度
            this.speed = speed;

    }

    move(dx, dy) {

        let cx = this.x;
        let cy = this.y;
        //判断
        if (cx > dx) {
            this.x -= this.speed
            this.y = this.line(cx, cy, dx, dy, this.x)
        } else if (cx < dx) {
            this.x += this.speed
            this.y = this.line(cx, cy, dx, dy, this.x)
        } else {
            // 如果在同一占线
            if (cy > dy) {
                this.y -= this.speed
            } else {
                this.y += this.speed
            }
        }

        // console.log("x:"+this.x);
        // console.log("cx:"+cx);
        // console.log("cy:"+cy);
        // console.log("y:"+this.y);

        this.ball.style.left = this.x + 'px';
        this.ball.style.top = this.y + 'px';

    }
    // 销毁子弹（从页面中删除）
    destroy() {
        this.ball.parentNode.removeChild(this.ball)
    }

    line(x1, y1, x2, y2, x) {
        return y1 - (x - x1) * (y1 - y2) / (x2 - x1)
    }

}

export default Ball;