<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <c-panel :list="list"></c-panel>
      <infinite-loading @infinite="upCallback">
      </infinite-loading>
    </demo-details>
  </div>
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import InfiniteLoading from 'vue-infinite-loading';
  //创建vue对象
  export default {
    components: {
      'demoDetails': Details,
      cPanel, InfiniteLoading
    },
    data() {
      return {
        header: 'vue-infinite-loading',
        introduction: '这里是关于vue-infinite-loading插件的相关内容介绍',
        desc: '这里是关于vue-infinite-loading插件的相关内容说明',
        gitLink: 'https://github.com/airyland/vux',
        webLink: 'https://peachscript.github.io/vue-infinite-loading/',

        page:0
      }
    },
    methods: {
      upCallback: function (state) {
        let self = this;
        let params = {
          page: ++this.page,
          scb: (curPageData) => {
            state.loaded();
          },
          ecb: (err) => {
            state.loaded();
          }
        };
        this.$store.dispatch('getListBy', params)
      },
    },
    computed: {
      list() {
        return this.$store.state.base_data.list
      }
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../../node_modules/mescroll.js/mescroll.min.css';
</style>
