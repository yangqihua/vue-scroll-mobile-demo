<template>
  <demo-details
    :header="header"
    :introduction="introduction"
    :desc="desc"
    :gitLink="gitLink"
    :webLink="webLink"
  >
    <div class="scrollload-container">
      <c-panel :list="list" class="scrollload-content"></c-panel>
    </div>
  </demo-details>
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import Scrollload from  '../../assets/scrolload/Scrollload'
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
        loadMore: self.upCallback,
      })
    },
    methods: {
      upCallback: function (scroll) {
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
      this.scroll.destroy();
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
</style>
