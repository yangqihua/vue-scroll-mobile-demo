<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <vue-recyclist :list="list"
                     :tombstone="true"
                     :size="page.size"
                     :offset="page.offset"
                     :loadmore="pullup"
                     :spinner="true"
                     :nomore="true">

        <template slot="item" scope="props">
          <p>{{props.data.title}}</p>
        </template>
        <!--<div slot="spinner">Loading Data</div>-->
        <!--<div slot="nomore">No More Data</div>-->
      </vue-recyclist>
    </demo-details>
  </div>
</template>

<script>
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import VueRecyclist from 'vue-recyclist'
  export default {
    components: {
      'demoDetails': Details,
      cPanel,
      VueRecyclist
    },
    data () {
      return {
        header: 'vue-recyclist',
        introduction: '这里是关于vue-recyclist插件的相关内容介绍',
        desc: '这里是关于vue-recyclist插件的相关内容说明',
        gitLink: 'https://github.com/xtongs/vue-recyclist',
        webLink: 'https://xtongs.github.io/vue-recyclist',

        page: 0,
        size: 10,
        offset: 200
      }
    },
    methods: {
      pullup(){
        this.$store.dispatch('getListBy', {
          page: ++this.page,
          scb: (curPageData) => {
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
      this.pullup()
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  .tombstone {
    p {
      width: 100%;
      height: 0.5em;
      background-color: #ccc;
      margin: 0.5em 0;
    }
  }

  .bubble {
    padding: 7px 10px;
    color: #333;
    background: #fff;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 420px;
    min-width: 80px;
    margin: 0 20px 0 5px;
    &:before {
      content: '';
      border-style: solid;
      border-width: 0 10px 10px 0;
      border-color: transparent #fff transparent transparent;
      position: absolute;
      top: 0;
      left: -10px;
    }
  }

  .meta {
    font-size: 0.8rem;
    color: #999;
    margin-top: 3px;
  }
</style>
