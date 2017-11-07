<template>
  <div>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import Scrollload from 'Scrollload'
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

        scroll:null,
        page:0,
      }
    },
    mounted(){
      this.scroll = new Scrollload({
        // container 和 content 两个配置的默认取的scrollload-container和scrollload-content类的dom。只要你按照以上的dom结构写，这两个配置是可以省略的
        container: document.querySelector('.scrollload-container'),
//        window: document.querySelector('.scrollload-container'),
        content: document.querySelector('.scrollload-content'),
        loadMore: this.upCallback,
        useLocalScrollFix:true,

        // 你也可以关闭下拉刷新
        enablePullRefresh: false,
      })
    },
    methods: {
      upCallback: function (scroll) {
      	console.log('up')
      	let params = {
      		page:++this.page,
          scb:(curPageData)=>{
      			scroll.unLock();
          },
          ecb:(err)=>{
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
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../../node_modules/mescroll.js/mescroll.min.css';
</style>
