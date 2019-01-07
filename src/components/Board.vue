<template>
  <div>
    <div class="countdisplay" id="countDisplay" style="display: block;">
      <img
        src="../images/pause.png"
        class="startgm"
        id="btn_Start"
        @click="DealStartBtnEvent()"
        v-show="img"
        style="display: block;"
      >
      <img
        src="../images/start.png"
        class="startgm"
        id="btn_Start"
        @click="DealStartBtnEvent()"
        v-show="!img"
        style="display: block;"
      >
      <div class="countscore_space"></div>
      <div class="countscore" id="lable_Countscore">得分:{{fenshu}}</div>
      <div
        class="displaybgsound"
        @click="OnOrOffBGSound()"
        id="bgSoundO"
        style="display: block;"
      >声音:开</div>
    </div>

    <!-- 弹出框 -->
    <div class="optionbox" id="optionBox" style="display: block;">
      <a class="returngm" @click="StartGM()">返回游戏</a>
      <br>
      <br>
      <br>
      <a class="quitgm" @click="QuitGM()">退出游戏</a>
    </div>
  </div>
</template>
<style scoped>
.countdisplay {
  width: 1000px;
  height: 60px;
  background-color: transparent;
  display: none;
  float: none;
}
.startgm {
  width: 100px;
  height: 100px;
  float: left;
  background-repeat: no-repeat;
  cursor: pointer;
}
.countscore_space {
  width: 10px;
  height: 40px;
  background-color: transparent;
  float: left;
}
.countscore {
  width: 240px;
  height: 30px;
  background-color: transparent;
  float: left;
  font-family: "方正喵喵体", "微软雅黑", "黑体", "楷体";
  font-size: 40px;
  text-align: left;
  padding-top: 10px;
  cursor: default;
}
.displaybgsound {
  float: right;
  font-family: "方正喵喵体", "微软雅黑", "黑体", "楷体";
  font-size: 40px;
  text-align: left;
  padding-top: 10px;
  cursor: pointer;
  display: none;
  background-color: transparent;
}

.optionbox {
  display: none;
  float: left;
  margin-top: 500px;
  height: 300px;
  width: 100%;
  color: #666;
  text-align: center;
  font-size: 60px;
  background-color: transparent;
  font-family: "方正喵喵体", "微软雅黑", "黑体", "楷体";
}
</style>
<script>
export default {
  // 定义属性（值由父数组传过来的）
  props: ["fenshu"],
  data() {
    return {
      btn_Start: "",
      IsEndGM: false, //结束
      IsStart: false, //开始
      img: true,
      IsOpenEndBox: false
    };
  },
  methods: {
    DealStartBtnEvent(ev) {
      var oEvent = ev || event;
      if (this.IsStart) {
        this.PauseGM();
      } else {
        this.StartGM();
      }
    },
    // 暂停
    PauseGM() {
      if (!this.IsEndGM) {
        this.IsStart = false;
        this.img = false;
        optionBox.style.display = "block";
      } else {
        EndBoxIsOpen();
      }
    },
    // 开始
    StartGM() {
      if (!this.IsEndGM) {
        this.IsStart = true;
        this.img = true;
        optionBox.style.display = "none";
      } else {
        EndBoxIsOpen();
      }
    },
    // 强制打开结束对话框
    EndBoxIsOpen() {
      if (!IsOpenEndBox) {
        OpenEndBox();
      }
    },
    // 游戏结束框
    OpenEndBox() {
      if (IsOpenEndBox) {
        IsOpenEndBox = false;
        endBox.style.display = "none";
      } else {
        IsOpenEndBox = true;
        endBox.style.display = "block";
      }
    },
    // 结束游戏
    QuitGM(){
      // 显示背景图 
    },
    EndGM() {
      sumScore.innerHTML = "总分:" + NowScore;
      OpenEndBox();
      IsStart = false;
      IsEndGM = true;
      CloseBGA();
      HostilePlaneBlast(myPlane, 3);
      EndBoxIsOpen(); //防止未打开结束
    }
  }
};
</script>
