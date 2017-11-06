<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <scroller lock-x use-pullup
                v-model="status"
                @on-pullup-loading="pullup"
                height="-100"
                ref="scroller">
        <div class="content_photo">
          <c-panel :list="data.list"/>
        </div>
        <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up">
          <span class="pullup-arrow iconfont" v-show="status.pullupStatus !== 'loading'"
                :class="{'rotate': status.pullupStatus === 'down'}">&#xe7a8;</span>
              <span v-show="status.pullupStatus === 'loading'">
            <load-more tip="努力加载中" class="cc_loadmore"></load-more>
          </span>
        </div>
      </scroller>
    </demo-details>
  </div>
</template>

<script>
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import {Scroller, LoadMore} from 'vux'

  export default {
    components: {
      Scroller, LoadMore,
      'demoDetails': Details,
      cPanel
    },
    data () {
      return {
        header: 'Vux',
        introduction: '这里是关于Vux插件的相关内容介绍',
        desc: '这里是关于Vux插件的相关内容说明',
        gitLink: 'https://github.com/airyland/vux',
        webLink: 'https://vux.li/',

        page: 0,
        status: {
          pullupStatus: 'default'
        }
      }
    },
    methods: {
      pullup() {
        this.$store.dispatch('getListBy', ++this.page)
      }
    },
    computed: {
      data() {
        this.$nextTick(() => {
          this.status.pullupStatus = 'default'
          this.$refs.scroller.reset()
        })
        return this.$store.state.base_data
      }
    },
    created(){
    	this.pullup();
    },
    activated () {
    	console.log("activated:");
      this.$refs.scroller.reset()
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin.less";

  .content_photo{
    background: #fff;
  }
  .cc_loadmore{
    margin: 0 auto 5px !important;
    span {
      color: @color_desc;
    }
  }

  .rotate {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }

  .pullup-arrow {
    display: block;
    transition: all linear 0.2s;
    -webkit-transition: all linear 0.2s;
    color: #666;
    font-size: 25px;
  }
</style>
