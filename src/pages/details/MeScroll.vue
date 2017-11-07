<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >
      <scroll :upCallback="upCallback" :emptyDataBtnClick="btnClick" ref="mescroll">
          <c-panel :list="list"></c-panel>
      </scroll>
    </demo-details>
  </div>
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Panel'
  import Scroll from '../../components/mescroll/Scroll.vue'
  //创建vue对象
  export default {
    components: {
      'demoDetails': Details,
      cPanel,Scroll
    },
    data() {
      return {
        header: 'MeScroll',
        introduction: '这里是关于MeScroll插件的相关内容介绍',
        desc: '这里是关于MeScroll插件的相关内容说明',
        gitLink: 'https://github.com/airyland/vux',
        webLink: 'https://vux.li/',
      }
    },
    methods: {
      upCallback: function (page) {
        let self = this;
      	let params = {
      		page:page.num,
          scb:(curPageData)=>{
            self.$refs.mescroll.endSuccess(curPageData.length);
          },
          ecb:(err)=>{
            this.$vux.toast.show({text: err,type:'warn'})
            self.$refs.mescroll.endErr();
          }
        };
        this.$store.dispatch('getListBy', params)
      },
      btnClick() {
        alert("点击了去逛逛按钮");
      }
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
