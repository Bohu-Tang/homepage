<script setup lang="ts">

</script>

<template>
  <div class="base-layout">
    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="side-content">
      侧边测试内容区
    </div>
  </div>
</template>

<style scoped lang="less">
.base-layout {
  padding-top: 80px;
  width: 1200px;
  margin: 0 auto;
  display: flex;

.main-content {
  width: 800px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  height: 800px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 6px;

  }
}

.side-content {
  width: 380px;
  margin-left: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 6px;
}

}

</style>
