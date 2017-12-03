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
          <content :list="list"></content>
      </scroll>
    </demo-details>
  </div>
</template>

<script type="text/ecmascript-6">
  import Details from '../../components/Details.vue'
  import Content from '../../components/Content'
  import Scroll from '../../components/mescroll/Scroll.vue'
  //创建vue对象
  export default {
    components: {
      'demoDetails': Details,
      Content,Scroll
    },
    data() {
      return {
        header: 'vue-virtual-scroller',
        introduction: '这里是关于vue-virtual-scroller插件的相关内容介绍',
        desc: '这里是关于vue-virtual-scroller插件的相关内容说明',
        gitLink: 'https://github.com/Akryum/vue-virtual-scroller',
        webLink: 'https://akryum.github.io/vue-virtual-scroller/',
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
