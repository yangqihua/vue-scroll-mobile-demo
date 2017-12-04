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
</style>
