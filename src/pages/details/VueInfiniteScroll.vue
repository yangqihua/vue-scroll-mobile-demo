<template>
  <div>
    <x-header class="header">{{header}}</x-header>
    <div class="scroller" v-infinite-scroll="pullup" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <list-content :list="list"></list-content>
    </div>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  import ListContent from '../../components/Content'
  import infiniteScroll from 'vue-infinite-scroll'

  export default {
    components: {ListContent, XHeader},
    directives: {infiniteScroll},
    data () {
      return {
        header: 'vue-infinite-scroll',
        page: 0,
        list: [],
        busy: false
      }
    },
    methods: {
      getData() {
        this.busy = true;
        this.$store.dispatch('getData', {
          page: ++this.page,
          scb: (result) => {
            this.busy = false;
            this.list = this.list.concat(result)
          },
          ecb: (err) => {
            this.busy = false;
            this.$vux.toast.show({text: err, type: 'warn'})
          }
        });
      },
      pullup(){
        if (!this.busy) {
          this.getData();
        }
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
