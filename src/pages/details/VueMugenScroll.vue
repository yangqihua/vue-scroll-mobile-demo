<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <content :list="list" style="height: 100%;"></content>
      <mugen-scroll :handler="upCallback" :should-handle="!loading">
        loading...
      </mugen-scroll>
    </demo-details>
  </div>
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import Content from '../../components/Content'
  import MugenScroll from 'vue-mugen-scroll'
  //创建vue对象
  export default {
    components: {
      'demoDetails': Details,
      Content, MugenScroll
    },
    data() {
      return {
        header: 'VueMugenScroll',
        introduction: '这里是关于VueMugenScroll插件的相关内容介绍',
        desc: '这里是关于VueMugenScroll插件的相关内容说明',
        gitLink: 'https://github.com/airyland/vux',
        webLink: 'https://vux.li/',

        loading: false,
        page: 0,
      }
    },
    methods: {
      upCallback: function (page) {
        this.loading = true
        let params = {
          page: ++this.page,
          scb: (curPageData) => {
            this.loading = false
          },
          ecb: (err) => {
            this.loading = false
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
