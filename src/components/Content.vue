<template>
  <div class="cc_panel_wapper">
    <div class="cc_panel_detail" v-for="(item, index) in list" :key="index">
      <div class="cc_panel_detail_image_wapper">
        <img
          v-lazy="item.img"
          alt="预览图"
          class="image"
          width="250"
          height="188">
      </div>
      <div class="cc_panel_detail_info">
        <h4 class="title">{{item.title}}</h4>
        <span class="desc">
          <i class="iconfont icon-icon1"></i> {{item.view}}
          <i class="iconfont icon-shouye1"></i> {{item.like}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list'],
  }
</script>

<style lang="less" rel="stylesheet/less">

  .cc_panel_wapper {
    margin-left: -15px;
    padding: 15px;
    box-sizing: border-box;
    &:after {
      content: "";
      display: block;
      clear: both;
    }

    .cc_panel_detail {
      position: relative;
      width: 50%;
      overflow: hidden;
      font-size: 0;
      float: left;
      padding-left: 15px;
      padding-bottom: 15px;
      box-sizing: border-box;
      &_image_wapper {
        position: relative;
        margin-bottom: 5px;
        width: 100%;
        padding-top: (188/250)*100%;
        background: #f9f8fb;
        border-radius: 3px;

        .image {
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 3px;
          opacity: 0;
          transition: opacity .4s ease;
          &[lazy=loaded] {
            opacity: 1;
          }
        }
      }

      &_info {
        .title {
          display: -webkit-box;
          height: 40px;
          margin-bottom: 18px;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;

          color: #2b333b;
          font-size: 12px;
          line-height: 1.6;
          font-weight: 400;
        }
        .desc {
          position: absolute;
          left: 15px;
          bottom: 15px;
          color: #b7bbbf;
          font-size: 12px;
          line-height: 1;
          i {
            vertical-align: -2px;
          }
        }
      }
    }
  }
</style>
