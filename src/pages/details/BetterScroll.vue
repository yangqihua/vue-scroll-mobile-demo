<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <scroll ref="scroll"
              :data="list"
              :pullUpLoad="pullUpLoad"
              @pullingUp="onPullingUp">
        <c-panel :list="list"></c-panel>
      </scroll>
    </demo-details>
  </div>
</template>

<script>
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import Scroll from '../../components/better-scroll/Scroll.vue'

  export default {
    components: {
      Scroll,
      'demoDetails': Details,
      cPanel
    },
    data () {
      return {
        header: 'Better-scroll',
        introduction: '这里是关于Better-scroll插件的相关内容介绍',
        desc: '这里是关于Better-scroll插件的相关内容说明',
        gitLink: 'https://github.com/ustbhuangyi/better-scroll',
        webLink: 'https://ustbhuangyi.github.io/better-scroll/#/',

        pullUpLoad: {
          threshold: 10,
          txt: {more: '', noMore: '暂无更多数据'}
        },
        page: 0,
      }
    },
    methods: {
      onPullingUp() {
        // 更新数据
        this.$store.dispatch('getListBy', {page:++this.page})
      },
    },
    computed: {
      list() {
        return this.$store.state.base_data.list;
      }
    },
    mounted(){
      this.onPullingUp();
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin.less";

  .content_photo {
    background: #fff;
  }

  .cc_loadmore {
    margin: 0 auto 5px !important;
    span {
      color: @color_desc;
    }
  }

  .rotate {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }

  .pullup-arrow {
    display: block;
    transition: all linear 0.2s;
    -webkit-transition: all linear 0.2s;
    color: #666;
    font-size: 25px;
  }
</style>
