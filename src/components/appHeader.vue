<script setup lang="ts">
import {ref} from "vue";

const active = ref('/')

function chooseNav(path: string) {
  active.value = path
}
</script>

<template>
  <div class="box">
    <div class="content">
      <div class="left">
        <img src="@/assets/logo.png">
        <span>测试文字</span>
      </div>
      <div class="right">
        <div class="nav" :class="active==='/'?'active':''" path="/" @click="chooseNav('/')">测试一</div>
        <div class="nav" :class="active==='/test'?'active':''" path="/test" @click="chooseNav('/test')">测试二</div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.box {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 10px #fff;

  .content {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;

    .left {
      width: 500px;
      display: flex;

      img {
        width: 40px;
        height: 40px;
        margin-top: 10px;
      }

      span {
        line-height: 60px;
        font-size: 16px;
        margin-left: 20px;
      }
    }

    .right {
      width: 700px;
      display: flex;
      align-items: center;

      .nav {
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        box-sizing: border-box;
        margin-right: 20px;
        cursor: pointer;

        &:hover {
          color: @primary-color;
          font-weight: bold;
        }
      }

      .active {
        border-bottom: 3px solid @primary-color;
        color: @primary-color;
        font-weight: bold;
      }
    }
  }
}
</style>
