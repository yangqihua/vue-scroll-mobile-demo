<template>
<div class="detail_head">
  <h1 class="detail_head_title" v-html="info.title"></h1>
  <p class="detail_head_name">{{info.userName}}</p>
  <p class="detail_head_desc" v-html="info.more"></p>
</div>
</template>

<script>
export default {
  props: [ 'info' ]
}
</script>

<style lang="less">
@import "../style/mixin";
.detail_head {
  background: @base_ground;
  padding: 15px 10px;

  &_title {
    font-size: 22px;
    line-height: 1.4;
    color: @color_tit;
  }
  &_name {
    color: @color_active;
    margin-bottom: 4px;
  }
  &_desc {
    font-size: 12px;
    color: @color_desc;
    line-height: 1.4;
  }
}
</style>
