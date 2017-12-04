<template>
  <div>
    <x-header class="header">{{header}}</x-header>
      <scroller :on-infinite="pullup">
        <list-content style="padding-top: 61px;" :list="list"></list-content>
      </scroller>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  import ListContent from '../../components/Content'
  export default {
    components: {ListContent,XHeader},
    data () {
      return {
        header: 'Vue Scroller',
        page: 0,
        list:[],
      }
    },
    methods: {
      pullup(done){
        this.$store.dispatch('getData', {
          page:++this.page,
          scb: (result) => {
            this.list = this.list.concat(result)
            done();
          }
        });
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
