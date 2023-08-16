<template>
  <div class="about">
    <div class="box">
      <div class="item">
        <div class="iconfont icon-one">
          赤
        </div>
        <div class="badge" />
      </div>
      <div class="item">
        <div class="iconfont icon-two">
          橙
        </div>
        <div class="badge" />
      </div>
      <div class="item">
        <div class="iconfont icon-san">
          黄
        </div>
        <div class="badge" />
      </div>
      <div class="item">
        <div class="iconfont icon-si">
          绿
        </div>
        <div class="badge" />
      </div>
      <div class="item">
        <div class="iconfont icon-wu">
          青
        </div>
        <div class="badge" />
      </div>
      <div class="item">
        <div class="iconfont icon-liu">
          蓝
        </div>
        <div class="badge" />
      </div>
      <div class="item">
        <div class="iconfont icon-qi">
          紫
        </div>
        <div class="badge" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e2759;
}
.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0,0,0,.25);
  cursor: pointer;
}
.box>.item .iconfont{
    font-size: 20px;
    pointer-events: none;
    color: #fff;
    opacity: .25;
    padding: 20px 40px;
    transition: .25s;
    position: relative;
    z-index: 2;
}
.box>.item{
    position: relative;

  }
.badge{
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 40px;
    border-radius: 10px;
    background-color: #FF0000;
    box-shadow: 0 0 15px #FF0000,
    0 0 30px #FF0000,
    0 0 45px #FF0000,
    0 0 60px #FF0000;
    transition: .5s;
    z-index: 1;
    opacity: 0;
  }
  .box>.item:hover .iconfont {
    backdrop-filter: blur(15px);
    opacity: 1;
  }
  .box>.item:hover .badge {
    opacity: 1;
  }
  .item:nth-child(2) .badge{
    background-color: #FF7F00;
    box-shadow: 0 0 15px #FF7F00,
    0 0 30px #FF7F00,
    0 0 45px #FF7F00,
    0 0 60px #FF7F00;
  }
  .item:nth-child(3) .badge{
    background-color: #FFFF00;
    box-shadow: 0 0 15px #FFFF00,
    0 0 30px #FFFF00,
    0 0 45px #FFFF00,
    0 0 60px #FFFF00;
  }
  .item:nth-child(4) .badge{
    background-color: #00FF00;
    box-shadow: 0 0 15px #00FF00,
    0 0 30px #00FF00,
    0 0 45px #00FF00,
    0 0 60px #00FF00;
  }
  .item:nth-child(5) .badge{
    background-color: #00FFFF;
    box-shadow: 0 0 15px #00FFFF,
    0 0 30px #00FFFF,
    0 0 45px #00FFFF,
    0 0 60px #00FFFF;
  }
  .item:nth-child(6) .badge{
    background-color: #0000FF;
    box-shadow: 0 0 15px #0000FF,
    0 0 30px #0000FF,
    0 0 45px #0000FF,
    0 0 60px #0000FF;
  }
  .item:nth-child(7) .badge{
    background-color: #8B00FF;
    box-shadow: 0 0 15px #8B00FF,
    0 0 30px #8B00FF,
    0 0 45px #8B00FF,
    0 0 60px #8B00FF;
  }
</style>
