import BarImg from "../images/2.png"

class Barrier {
    constructor(x = 0, y = 0, speed = 5, width = 200) {
        this.barr = document.createElement('img');
        this.barr.src = BarImg
        this.barr.width = width
        this.barr.style.position = "absolute"
        document.body.appendChild(this.barr)

        this.x = x;
        this.y = y;
        this.barr.style.left = this.x + 'px';
        this.barr.style.top = this.y + 'px';

        // 向下    -1 向上
        this.tops = 1;

        // 速度
        this.speed = speed;
    };
    move() {
        this.y += this.speed;
        this.barr.style.top = this.y + 'px';
    };

    // 销毁敌机（从页面中删除）
    destroy() {
        this.Barr.parentNode.removeChild(this.Barr)
    }

}

export default Barrier;