<script setup lang="ts"></script>
<template>
  <div class="article-card" v-for="item in 10" :key="item">
    文章列表
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


  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px @primary-color;
    transition: box-shadow 0.3s linear;
  }
}
</style>
