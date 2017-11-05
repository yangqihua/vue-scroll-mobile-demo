<template>
  <div class="content_nav">
    <ul>
      <li class="content_nav_li" v-for="(li, index) in navlist" :key="index">
        <a class="circular_icon_wapper" :class="li.cn" :href="li.hf">
          <i class="iconfont" :class="li.ic"></i>
        </a>
        <span class="title">{{li.tit}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist: [
        {
          cn: 'yellow',
          ic: 'icon-shouye16',
          hf: 'javascript:',
          tit: '精选'
        },
        {
          cn: 'glow',
          ic: 'icon-shouye8',
          hf: 'javascript:',
          tit: '创意'
        },
        {
          cn: 'blue',
          ic: 'icon-icon4',
          hf: 'javascript:',
          tit: '最佳'
        },
        {
          cn: 'qinblue',
          ic: 'icon-shouye15',
          hf: 'javascript:',
          tit: '活动'
        },
        {
          cn: 'red',
          ic: 'icon-search',
          hf: '#/search',
          tit: '检索'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import "../style/mixin.less";

.content_nav {
  padding: 15px 0 10px;
  background: #fff;
  // margin-bottom: 10px;
  &_li {
    display: inline-block;
    width: 20%;
    text-align: center;
    .title{
      color: @color_tit;
      font-size: 12px;
    }
  }
}

.circular_icon_wapper{
  display: block;
  width: 42px;
  height: 42px;
  margin: 0 auto;
  text-align: center;
  line-height: 42px;
  background: #ffb753;
  border-radius: 18px;
  i {
    color: #fff;
    font-size: 22px
  }

  &.yellow {
    .gradient(#ffc479, #feb74f)
  }
  &.glow {
    .gradient(#57f1b5, #30d994)
  }
  &.blue {
    .gradient(#a8b5f9, #99a0d4)
  }
  &.qinblue {
    .gradient(#5bcdff, #37bef8)
  }
  &.red {
    .gradient(#ff7f96, #ff5575)
  }
}
</style>
