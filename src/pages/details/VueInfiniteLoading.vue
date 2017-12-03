<template>
  <div>
    <x-header class="header">{{header}}</x-header>
    <div class="scroller">
      <list-content :list="list"></list-content>
      <infinite-loading @infinite="upCallback">
      </infinite-loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import ListContent from '../../components/Content'
  import InfiniteLoading from 'vue-infinite-loading';
  //创建vue对象
  export default {
    components: {ListContent, InfiniteLoading,XHeader},
    data() {
      return {
        header: 'vue-infinite-loading',
        introduction: '这里是关于vue-infinite-loading插件的相关内容介绍',
        desc: '这里是关于vue-infinite-loading插件的相关内容说明',
        gitLink: 'https://github.com/airyland/vux',
        webLink: 'https://peachscript.github.io/vue-infinite-loading/',

        page:0,
        list:[],
      }
    },
    methods: {
      upCallback(state) {
        this.$store.dispatch('getData', {
          page: ++this.page,
          scb: (result) => {
            this.list = this.list.concat(result)
            state.loaded();
          },
          ecb: (err) => {
            state.loaded();
          }
        });
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../../node_modules/mescroll.js/mescroll.min.css';
</style>
