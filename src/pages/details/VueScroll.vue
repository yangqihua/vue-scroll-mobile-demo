<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <scroller :on-infinite="pullup">
        <c-panel :list="list"></c-panel>
      </scroller>
    </demo-details>
  </div>
</template>

<script>
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  export default {
    components: {
      'demoDetails': Details,
      cPanel,
    },
    data () {
      return {
        header: 'Vue Scroller',
        introduction: '这里是关于Vue Scroller插件的相关内容介绍',
        desc: '这里是关于Vue Scroller插件的相关内容说明',
        gitLink: 'https://github.com/wangdahoo/vue-scroller',
        webLink: 'https://wangdahoo.github.io/vue-scroller',

        page: 0,
      }
    },
    methods: {
      pullup(done){
        this.$store.dispatch('getListBy', {
          page: ++this.page,
          scb:(curPageData)=>{
          	done();
          }
        });
      }
    },
    computed: {
      list() {
        return this.$store.state.base_data.list
      }
    },
    created(){
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
