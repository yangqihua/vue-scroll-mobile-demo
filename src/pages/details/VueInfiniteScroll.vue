<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <div class="scroll" v-infinite-scroll="pullup" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <content :list="list"></content>
      </div>
    </demo-details>
  </div>
</template>

<script>
  import Details from '../../components/Details.vue'
  import Content from '../../components/Content'
  import infiniteScroll from 'vue-infinite-scroll'

  export default {
    components: {
      'demoDetails': Details,
      Content
    },
    directives: {infiniteScroll},
    data () {
      return {
        header: 'vue-infinite-scroll',
        introduction: '这里是关于vue-infinite-scroll插件的相关内容介绍',
        desc: '目前我这里使用 vue-infinite-scroll 来加载列表，总是不能正常滑动，不知道是插件原因还是我自己代码原因。求大神找bug并pr',
        gitLink: 'https://github.com/ElemeFE/vue-infinite-scroll',
        webLink: 'https://github.com/ElemeFE/vue-infinite-scroll',

        page: 0,
        busy: false
      }
    },
    methods: {
      getData() {
        this.busy = true;
        let params = {
          page: ++this.page,
          scb: (curPageData) => {
            console.log('curPageData', curPageData)
            console.log('this.busy', this.busy)
            this.busy = false;
          },
          ecb: (err) => {
            this.busy = false;
          }
        };
        this.$store.dispatch('getListBy', params)
      },
      pullup(){
        console.log('this.busy:', this.busy);
        if (!this.busy) {
          this.getData();
        }
      }
    },
    computed: {
      list() {
        return this.$store.state.base_data.list
      }
    },
    created(){
//    	this.pullup();
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin.less";

  .scroll {
    background: #fff;
    /*height: 100%;*/
  }
</style>
