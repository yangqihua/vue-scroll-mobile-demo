<template>
  <div>
    <x-header class="header">{{header}}</x-header>
    <scroller class="scroller" lock-x use-pullup
              v-model="status"
              @on-pullup-loading="pullup"
              height="-46"
              ref="scroller">
      <list-content :list="list"></list-content>
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up">
          <span class="pullup-arrow iconfont" v-show="status.pullupStatus !== 'loading'"
                :class="{'rotate': status.pullupStatus === 'down'}">&#xe7a8;</span>
        <span v-show="status.pullupStatus === 'loading'">
            <load-more tip="努力加载中" class="loadmore"></load-more>
          </span>
      </div>
    </scroller>
  </div>
</template>

<script>
  import ListContent from '../../components/Content'
  import {Scroller, LoadMore, XHeader} from 'vux'

  export default {
    components: {
      Scroller, LoadMore, XHeader, ListContent
    },
    data () {
      return {
        header: 'Vux',
        data: [],
        page: 0,
        status: {
          pullupStatus: 'default'
        }
      }
    },
    methods: {
      pullup() {
        this.$store.dispatch('getData', {
        	page:++this.page,
          scb: (result) => {
            this.data = this.data.concat(result)
          }
        });
      }
    },
    computed: {
      list() {
        this.$nextTick(() => {
          this.status.pullupStatus = 'default'
          this.$refs.scroller.reset()
        })
        return this.data
      }
    },
    mounted(){
      this.pullup();
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  .loadmore {
    margin: 0 auto 5px !important;
    span {
      color: #b7bbbf;
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
