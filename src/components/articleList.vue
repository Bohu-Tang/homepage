<script setup lang="ts"></script>
<template>
  <div class="article-card" v-for="item in 10" :key="item">
    <div class="title-container">
      <div class="title">
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
      </div>
      <div class="other-info">
        <span class="iconfont icon-eye"></span>
        <span class="count">166</span>
        <span class="iconfont icon-like"></span>
        <span class="count">166</span>
      </div>
    </div>
    <div class="content-container">
      <div class="cover">
        <img src="https://iconfont.alicdn.com/p/avatar/Jy7B4vBnpdOl.jpeg"/>
      </div>
      <div class="introduction">
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测
        试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测
        试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测
        试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
      </div>
    </div>

  </div>
</template>
<style lang="less">
.article-card {
  height: 200px;
  border-radius: 4px;
  box-shadow: none;
  transition: box-shadow 0.3s linear;
  border: 1px solid @border-color;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;

  &:hover {
    box-shadow: 0 0 10px @primary-color;
    transition: box-shadow 0.3s linear;
  }

  .title-container {
    height: 55px;
    border-bottom: 1px solid @border-color;

    .title {
      height: 25px;
      line-height: 25px;
      font-size: 16px;
      font-weight: bold;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1; /* 这里是超出几行省略 */
      overflow: hidden;
      text-indent: 2em;
      cursor: pointer;

      &:hover {
        color: @deep-color;
        transition: color 0.1s linear;
      }
    }

    .other-info {
      height: 30px;
      line-height: 30px;
      text-align: right;
      font-size: 12px;

      .iconfont {
        margin-left: 20px;
        color: @deep-color;
      }
    }
  }

  .content-container {
    height: 140px;
    display: flex;
    align-items: center;

    .cover {
      width: 100px;
      height: 100px;
      background-color: pink;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .introduction {
      width: 635px;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4; /* 这里是超出几行省略 */
      overflow: hidden;
      text-indent: 2em;
      cursor: pointer;

      &:hover {
        color: @deep-color;
        transition: color 0.1s linear;
      }
    }
  }
}
</style>
