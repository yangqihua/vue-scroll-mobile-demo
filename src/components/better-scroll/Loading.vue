<template>
  <div class="mf-loading-container">
    <img src="../../assets/better-scroll/loading.gif">
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'
  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="less" rel="stylesheet/less">
  .mf-loading-container{
    img{
      width: 20px;
      height: 20px;
      display: block;
    }
  }
</style>
