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
        introduction: '这里是关于Vue Scroller插件的相关内容介绍',
        desc: '这里是关于Vue Scroller插件的相关内容说明',
        gitLink: 'https://github.com/wangdahoo/vue-scroller',
        webLink: 'https://wangdahoo.github.io/vue-scroller',

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
