<template>
  <div>
    <board :fenshu="fenshu" />
  </div>
</template>
<script>
import Ball from "./class/Ball.js";
import Plane from "./class/Plane.js";
import Barrier from "./class/Barrier.js";
import Board from "./components/Board.vue";
export default {
  // 注册 Vue 组件
  components: {
    Board
  },
  data() {
    return {
      Bar: [], // 敌军
      plane: "",
      ball: "",
      intervals: [],
      b1: "",
      b2: "",
      fenshu:0
    };
  },
  created() {
    this.plane = new Plane();
    // 键盘事件
    this.keying();
    this.enemy();
  },
  methods: {
    // 子弹
    time() {
      // console.log(this.plane);
      this.b1.move(this.plane.x + 32, 0);
      this.b2.move(this.plane.x + 232, 0);
      // console.log(this.b1.ball);
      if (this.b1.y <= 0) {
        this.b1.ball.style.display = "none";
      }
      if (this.b2.y <= 0) {
        this.b2.ball.style.display = "none";
      }
      requestAnimationFrame(this.time);
    },
    // 键盘
    keying() {
      window.addEventListener("keydown", e => {
        if (e.key == "w" || e.key == "ArrowUp") {
          this.plane.moveup();
        } else if (e.key == "s" || e.key == "ArrowDown") {
          this.plane.movedown();
        } else if (e.key == "a" || e.key == "ArrowLeft") {
          this.plane.moveleft();
        } else if (e.key == "d" || e.key == "ArrowRight") {
          this.plane.moveright();
        }

        if (e.key == "j" || e.key == " ") {
          // 两个并列的子弹
          this.b1 = new Ball(this.plane.x + 32, this.plane.y);
          this.b2 = new Ball(this.plane.x + 232, this.plane.y);
          // console.log(this.plane);
          // 让子弹动
          requestAnimationFrame(this.time);
        }
      });
    },
    // 敌机
    enemy() {
      // 多个敌机
      this.Bar.push(
        new Barrier(
          Math.random() * 1000,
          Math.random() * 300,
          Math.random() * 5,
          Math.random() * 300
        )
      );
      // console.log(this.Bar);
      // 判断 敌军飞机出现的次数
      // if (this.Bar.length < Math.random() * 30) {
      //   setTimeout(this.enemy, 1000);
      // }
      // 移动 敌军 自动
      for (let i = 0; i < this.Bar.length; i++) {
        setInterval(() => {
          this.Bar[i].move();
        }, 100);
      }
    }
  }
};
</script>