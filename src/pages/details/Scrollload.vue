<template>
  <div>
    <x-header class="header">{{header}}</x-header>
    <div class="scrollload-container scroller">
      <list-content :list="list" class="scrollload-content"></list-content>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import ListContent from '../../components/Content'
  import Scrollload from  '../../assets/scrolload/Scrollload'
  //创建vue对象
  export default {
    components: {ListContent, XHeader},
    data() {
      return {
        header: 'Scrollload',
        introduction: '这里是关于Scrollload插件的相关内容介绍',
        desc: '这里是关于Scrollload插件的相关内容说明',
        gitLink: 'https://github.com/fa-ge/Scrollload/',
        webLink: 'https://github.com/fa-ge/Scrollload/blob/master/README.md',

        scroll: null,
        page: 0,
        list: [],
      }
    },
    mounted(){
      let self = this;
      this.scroll = new Scrollload({
        container: document.querySelector('.scrollload-container'),
        content: document.querySelector('.scrollload-content'),
        loadMore: self.upCallback,
      })
    },
    methods: {
      upCallback: function (scroll) {
        this.$store.dispatch('getData', {
          page: ++this.page,
          scb: (result) => {
            console.log("success")
            this.list = this.list.concat(result)
            scroll.unLock();
          },
          ecb: (err) => {
            scroll.throwException();
          }
        });
      },
    },
    destroyed(){
      this.scroll.destroy();
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
</style>
