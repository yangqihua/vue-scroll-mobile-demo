<template>
  <div>
    <x-header :left-options="{showBack: false}">vue-scroll-mobile-demo</x-header>
    <div class="demoList">
    <group title="各大 scroll 插件列表">
      <cell v-for="item in demoList" :key="item.link" :title="item.title" is-link @click.native.prevent="clickItem(item.link)"></cell>
    </group>
    </div>
  </div>
</template>

<script>
  import {XHeader,Group,Cell} from 'vux'

  export default {
    components: {
      XHeader,Group,Cell
    },
    data () {
      return {
      	demoList:[
          {title:'Vux','link':'/vux'},
          {title:'Better-scroll','link':'/better-scroll'},
          {title:'MeScroll','link':'/mescroll'},
        ],
      }
    },
    methods: {
      clickItem(link){
      	this.$router.push(link);
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  .demoList{
    margin-top: 10px;
  }
</style>
