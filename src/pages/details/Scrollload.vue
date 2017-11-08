<template>
  <!--<demo-details-->
  <!--:header="header"-->
  <!--:introduction="introduction"-->
  <!--:desc="desc"-->
  <!--:gitLink="gitLink"-->
  <!--:webLink="webLink"-->
  <!--&gt;-->
  <div style="">
    <div
      style="position:fixed;top:0;left:0;right:0;height: 40px;z-index: 9999; text-align: center;line-height: 40px;font-size: 30px;border-bottom: 1px solid #888;background: red">
      header
    </div>
    <div class="scrollload-container">
      <div class="scrollload-content">
      </div>
    </div>
    <div
      style="position:fixed;bottom: 0;left:0;right:0;height: 40px;z-index: 9999; text-align: center;line-height: 40px;font-size: 30px;border-bottom: 1px solid #888;background: red">
      footer
    </div>
  </div>
  <!--</demo-details>-->
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
    import 'Scrollload'
//  import '../../assets/scrolload/lib/Scrollload'
  //创建vue对象
  export default {
    components: {
      'demoDetails': Details,
      cPanel
    },
    data() {
      return {
        header: 'Scrollload',
        introduction: '这里是关于Scrollload插件的相关内容介绍',
        desc: '这里是关于Scrollload插件的相关内容说明',
        gitLink: 'https://github.com/fa-ge/Scrollload/',
        webLink: 'https://github.com/fa-ge/Scrollload/blob/master/README.md',

        scroll: null,
        page: 0,
      }
    },
    mounted(){
      let self = this;
      this.scroll = new Scrollload({
        container: document.querySelector('.scrollload-container'),
        content: document.querySelector('.scrollload-content'),
//        window: document.querySelector('#app'),
        loadMore: self.loadMore,
//        useLocalScrollFix: true,
        // 你也可以关闭下拉刷新
        enablePullRefresh: true,
        pullRefresh: function (sl) {
          setTimeout(function () {
            sl.contentDom.insertAdjacentHTML("afterBegin", "<div>new test</div>");
            sl.refreshComplete()
          }, 300)
        },
      })
    },
    methods: {
      loadMore(sl) {
        if (this.page++ === 6) {
          // 没有数据的时候需要调用noMoreData
          sl.noMoreData()
          return
        }
        let self = this
        setTimeout(function () {
          for (var i = 0; i < 20; i++) {
            sl.contentDom.insertAdjacentHTML("beforeEnd", "<div>test" + (i + (self.page - 1) * 10) + "</div>");
          }
          sl.unLock()
        }, 300)
      },
      upCallback: function (scroll) {
//        console.log('this.page:', this.page)
        console.log('this.scroll:', this.scroll)
        console.log('scroll:', scroll)
//        scroll.lock();
        let params = {
          page: ++this.page,
          scb: (curPageData) => {
            console.log("success")
            this.data = this.$store.state.base_data.list;
            scroll.unLock();
          },
          ecb: (err) => {
            scroll.throwException();
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
    destroyed(){

    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  .scrollload-container {
    padding-top: 40px;
    padding-bottom: 40px;
    .scrollload-content {
      font-size: 30px;
      line-height: 40px;
      text-align: center;
    }
  }
</style>
