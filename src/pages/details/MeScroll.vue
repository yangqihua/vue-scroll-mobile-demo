<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <div id="mescroll" class="mescroll">
          <c-panel :list="list"></c-panel>
      </div>
    </demo-details>
  </div>
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import MeScroll from 'MeScroll.js'
  import totop from '../../assets/mescroll/mescroll-totop.png'
  //创建vue对象
  export default {
    components: {
      'demoDetails': Details,
      cPanel
    },
    data() {
      return {
        header: 'MeScroll',
        introduction: '这里是关于MeScroll插件的相关内容介绍',
        desc: '这里是关于MeScroll插件的相关内容说明',
        gitLink: 'https://github.com/airyland/vux',
        webLink: 'https://vux.li/',

        mescroll: null,
        pdlist: []
      }
    },
    mounted() {
      //创建Mescroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      let self = this;
      self.mescroll = new MeScroll("mescroll", {
        down: {use: false},
        up: {
          auto: true,
          callback: self.upCallback, //上拉回调
          page:{size:8}, //可配置每页8条数据,默认10
          toTop: { //配置回到顶部按钮
            src: totop, //默认滚动到1000px显示,可配置offset修改
            offset : 1000
          },
          empty: { //配置列表无任何数据的提示
            warpId: "dataList",
            icon: "../../../assets/mescroll-empty.png",
            tip: "亲,暂无相关数据哦~",
            btntext: "去逛逛 >",
            btnClick: function () {
              alert("点击了去逛逛按钮");
            }
          },
          htmlNodata: '<p class="upwarp-nodata">-- 暂无更多数据 --</p>',
          scrollbar: {use: true, barClass: "mescroll-bar"}

        }
      });
    },
    methods: {
      //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      upCallback: function (page) {
        let self = this;
      	let params = {
      		page:page.num,
          scb:(curPageData)=>{
            self.mescroll.endSuccess(curPageData.length);
          },
          ecb:(err)=>{
            this.$vux.toast.show({text: err,type:'warn'})
            self.mescroll.endErr();
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
