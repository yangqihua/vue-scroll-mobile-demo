<template>
  <div>
    <x-header>{{header}}</x-header>
    <div class="detail">
      <button-tab v-model="selectIndex">
        <button-tab-item>效果演示</button-tab-item>
        <button-tab-item>插件说明</button-tab-item>
      </button-tab>
      <div class="demo" v-if="selectIndex==0">
        <slot></slot>
      </div>
      <div class="desc" v-else>
        <group label-width="4em" title="1.插件介绍及说明">
          <cell title="介绍" value-align="left" :value="introduction"></cell>
          <cell title="说明" value-align="left" :value="desc"></cell>
        </group>
        <group title="2.插件相关链接">
          <cell title="github地址" is-link @click.native.prevent="clickGit"></cell>
          <cell title="官网地址" is-link @click.native.prevent="clickWeb"></cell>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader, ButtonTab, ButtonTabItem,Group,Cell} from 'vux'

  export default {
    components: {
      XHeader, ButtonTab, ButtonTabItem,Group,Cell
    },
    name: 'details',
    props: {
      header: {
        type: String,
        default: '标题'
      },
      introduction: {
        type: String,
        default: '这里是关于插件的相关内容介绍'
      },
      desc: {
        type: String,
        default: '这里是关于插件的相关内容说明'
      },
      gitLink: {
        type: String,
        default: ''
      },
      webLink: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        selectIndex: 0,
      }
    },
    methods: {
      clickGit(){
      	location.href = this.gitLink;
      },
      clickWeb(){
        location.href = this.webLink;
      },
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  .detail {
    margin: 15px;
    .desc{
      margin-top: 30px;
      .weui-cell__ft{
        font-size: 13px;
      }
    }
    .demo{
      position: fixed;
      top:100px;
      bottom:0;
      left: 0;
      right: 0;
    }
  }
</style>
