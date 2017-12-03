<template>
  <div>
    <x-header class="header">{{header}}</x-header>
    <div class="scroller">
      <list-content :list="list" style="height: 100%;"></list-content>
      <mugen-scroll :handler="upCallback" :should-handle="!loading">
        自定义loading...
      </mugen-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import ListContent from '../../components/Content'
  import MugenScroll from 'vue-mugen-scroll'
  //创建vue对象
  export default {
    components: {XHeader, ListContent, MugenScroll},
    data() {
      return {
        header: 'VueMugenScroll',
        introduction: '这里是关于VueMugenScroll插件的相关内容介绍',
        desc: '这里是关于VueMugenScroll插件的相关内容说明',
        gitLink: 'https://github.com/airyland/vux',
        webLink: 'https://vux.li/',

        loading: false,
        page: 0,
        list: []
      }
    },
    methods: {
      upCallback: function (page) {
        this.loading = true
        this.$store.dispatch('getData', {
          page: ++this.page,
          scb: (result) => {
            this.loading = false
            this.list = this.list.concat(result)
          },
          ecb: (err) => {
            this.$vux.toast.show({text: err, type: 'warn'})
            this.loading = false
          }
        });
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../../node_modules/mescroll.js/mescroll.min.css';
</style>
