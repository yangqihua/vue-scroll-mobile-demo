<template>
  <div class="list_wapper">
    <div class="li_layer vux-1px-b" v-for="(item, index) in list" :key="index" @click.prevent.stop="jmp(item.link)">
      <div class="li_layer_img_w">
        <img v-lazy="item.image" alt="缩略图" class="image">
      </div>
      <div class="li_layer_i_w">
        <h4 class="title">{{item.title}}</h4>
        <p class="mininfo">{{item.type}}</p>
        <p class="desc">
          <i class="iconfont icon-icon1"></i> {{item.reqi}}
          <i class="iconfont icon-shouye1"></i> {{item.tuijian}}
          &nbsp;
        </p>
        <div class="userinfo">
          <span class="userinfo_time">{{item.update}}</span>
          <div class="userinfo_i">
            <span class="userinfo_name">{{item.username}}</span>
            <span class="userinfo_head" :style="{backgroundImage: 'url('+ item.userhead +')'}"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'list' ],
  methods: {
    jmp(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style lang="less">
@import "../style/mixin.less";

.li_layer {
  display: flex;
  padding: 10px;

  &_img_w {
    flex: 140px 0 0;
    width: 140px;
    font-size: 0;
    vertical-align: top;
    .image {
      border-radius: 3px;
      opacity: 0;
      &[lazy=loaded] {
        opacity: 1;
      }
    }
  }

  &_i_w {
    flex: 1;
    padding-left: 10px;
    .title {
      font-size: 14px;
      color: @color_tit;
      font-weight: 400;
      line-height: 1.5;
      height: 45px;
      overflow: hidden;
    }
    .desc,
    .mininfo {
      font-size: 12px;
      color: @color_desc;
      line-height: 1.4;
      i {
        vertical-align: middle;
      }
    }

    .userinfo {
      font-size: 12px;
      color: @color_desc;
      vertical-align: middle;
      line-height: 22px;
      &_i {
        float: right;
      }
      &_name {
        color: @color_tit;
        margin-right: 3px;
      }
      &_head {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #ddd no-repeat center;
        background-size: cover;
        border-radius: 3px;
        vertical-align: -5px;
      }
    }
  }
}


@media (max-width: 320px) {
  .li_layer_img_w {
    flex: 110px 0 0;
    width: 110px;
  }
  .li_layer_i_w .title {
    height: 44px;
  }
}

</style>
