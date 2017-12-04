<template>
  <div>
    <x-header class="header">{{header}}</x-header>
    <scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll"
            id="index_scroll">
      <content-list :list="list"></content-list>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import ContentList from '../../components/Content'
  import Scroll from '../../components/mescroll/Scroll.vue'
  //创建vue对象
  export default {
    components: {ContentList,XHeader, Scroll},
    data() {
      return {
        header: 'MeScroll',
        list:[],
      }
    },
    methods: {
      upCallback: function (page) {

        this.$store.dispatch('getData', {
          page: page.num,
          scb: (result) => {
            this.$refs.mescroll.endSuccess(result.length);
            this.list = this.list.concat(result)
          },
          ecb:(err)=>{
            this.$vux.toast.show({text: err, type: 'warn'})
            this.$refs.mescroll.endErr();
          }
        });
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
</style>
