<template>
  <div>
    <x-header class="header">{{header}}</x-header>
      <scroll ref="scroll"
              :data="list"
              :listenScrollEnd="true"
              :pullUpLoad="pullUpLoad"
              @pullingUp="onPullingUp">
        <list-content style="padding-top: 61px;" :list="list"></list-content>
      </scroll>
  </div>
</template>

<script>
  import ListContent from '../../components/Content'
  import Scroll from '../../components/better-scroll/Scroll.vue'
  import {XHeader} from 'vux'

  export default {
    components: {
      Scroll,XHeader,ListContent
    },
    data () {
      return {
        header: 'Better-scroll',
        pullUpLoad: {
          threshold: 10,
          txt: {more: '', noMore: '暂无更多数据'}
        },
        page: 0,
        list:[],
      }
    },
    methods: {
      onPullingUp() {
        this.$store.dispatch('getData', {
          page:++this.page,
          scb: (result) => {
            this.list = this.list.concat(result)
          }
        });
      },
    },
    mounted(){
      this.onPullingUp();
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
