<template>
  <div class="nav">
    <ul>
      <router-link
        v-for="(li, index) in navlist"
        :to="li.hf"
        :key="index"
        :exact="li.exa"
        class="nav_item"
        tag="li"
        active-class="active">
        <i class="iconfont" :class="li.ic"></i>
        {{li.tit}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist: [
        {
          ic: 'icon-shouye',
          hf: '/',
          tit: '首页',
          exa: true
        },
        {
          ic: 'icon-icon2',
          hf: '/works',
          tit: '作品',
          exa: false
        },
        {
          ic: 'icon-shouye12',
          hf: 'articles',
          tit: '文章',
          exa: false
        },
        {
          ic: 'icon-shouye2',
          hf: 'user',
          tit: '我的',
          exa: false
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import "../style/mixin.less";

.nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 52px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, .16);
  z-index: 90;

  &_item {
    display: inline-block;
    width: 25%;
    text-align: center;
    font-size: 12px;
    color: @color_desc;
    padding-top: 3px;
    transition: all .3s ease;

    &.active {
      color: @color_active;
    }
    i {
      display: block;
      font-size: 24px;
      line-height: 1.2;
    }
  }
}

</style>
