<template>
  <div>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import MeScroll from './mescroll.js'
  import totop from './mescroll-totop.png'
  import empty from './mescroll-empty.png'
  //创建vue对象
  export default {
    props: {
      upCallback: {
        type: Function,
        default: null
      },
      emptyDataBtnClick: {
        type: Function,
        default: null
      },
      toTopClass: {
        type: String,
        default: 'mescroll-totop'
      },
      upAuto: {
        type: Boolean,
        default: true
      },
      warpId: {
        type: String,
        default: 'mescroll'
      },
      upUse: {
        type: Boolean,
        default: true
      },
      scrollId: {
        type: String,
        default: 'body'
      },
      scrollTop: {
        type: Number,
        default: 0
      },
    },
    data() {
      return {
        mescroll: null,
        scrollIds:{},
      }
    },
    mounted() {
      //创建Mescroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      let self = this;
      this.mescroll = new MeScroll(self.scrollId, {
        down: {use: false},
        up: {
          use:self.upUse,
          auto: self.upAuto,
          callback: self.upCallback, //上拉回调
          page: {size: 10}, //可配置每页8条数据,默认10
          toTop: { //配置回到顶部按钮
            src: totop, //默认滚动到1000px显示,可配置offset修改
            offset: 1000,
            warpClass: self.toTopClass
          },
          noMoreSize: 5,  //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
          empty: { //配置列表无任何数据的提示
            warpId: self.warpId,
            icon: empty,
            tip: "暂无相关数据哦~",
            btntext: "去逛逛~",
            btnClick: self.emptyDataBtnClick || self.btnClick,
          },
          warpId: self.warpId,
          htmlNodata: '<p class="upwarp-nodata">暂无更多数据哦~</p>',
          scrollbar: {use: true, barClass: "mescroll-bar"},
          htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',
        }
      });
    },
    methods: {
      //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      endSuccess(curPageDataLength){
        this.mescroll && this.mescroll.endSuccess(curPageDataLength);
      },
      // (推荐): 后台接口有返回列表的总数据量 totalSize
      endSuccess(curPageDataLength, totalSize){
        this.mescroll && this.mescroll.endSuccess(curPageDataLength, totalSize);
      },
      endErr(){
        this.mescroll && this.mescroll.endErr();
      },
      deactivated(){
        this.mescroll && this.mescroll.deactivated();
      },
      activated(){
        if (!(this.mescroll && this.mescroll.beActivated)) {
          this.mescroll.activated();
        }
      },
      getScrollTop(){
        if(this.mescroll){
          return this.mescroll.getScrollTop();
        }
        return 0;
      },
      scrollTo(top,duration){
        this.mescroll && this.mescroll.scrollTo(top,duration);
      },
      btnClick() {
        alert("点击了去逛逛按钮,请具体实现业务逻辑");
      },
      resetUpScroll(){
        this.mescroll && this.mescroll.resetUpScroll();
      }
    },
    computed: {
      list() {
        return this.$store.state.base_data.list
      }
    },
    destroyed(){
      this.mescroll &&this.mescroll.destroy();
    },
    deactivated(){
      this.deactivated();
      let warpId = this.warpId;
      let scrollMap = {}
      scrollMap[warpId] = this.mescroll.preScrollY;
      this.$store.dispatch('setScrollTop', scrollMap)
    },
    activated(){
      this.activated();
      let scrollTop = 0;
      if(this.$store.state.scrollTops.hasOwnProperty(this.warpId)){
        scrollTop = this.$store.state.scrollTops[this.warpId];
      }
      this.scrollTo(scrollTop,0)
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import './mescroll.css';
</style>
