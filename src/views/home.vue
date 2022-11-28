<template>
  <div class="home">
    <header>头部</header>
    <div class="content">主体</div>
    <footer>底部</footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  padding: 0 20%;
  height: 100%;
}

header {
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #999;
}
.content{
  color: @primary-color;
}

footer {
  height: 100px;
  box-sizing: border-box;
  border: 1px solid #999;
}
</style>
