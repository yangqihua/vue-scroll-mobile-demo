<template>
<div class="content_full">
  <user-info-min :info="userinfo" />
  <div class="detail_content">
    <div class="detail_content_info" v-html="info"></div>
    <ul class="detail_content_show" v-html="show"></ul>
  </div>
</div>
</template>

<script>
import { jsonp, $dom, workInfor, workShow, getUserInfoMin, showloadin, hideloadin } from '../mixin/util'
import { io_detail } from '../mixin/url'
import UserInfoMin from './UserInfoMin.vue'

export default {
  components: { UserInfoMin },
  name: 'workDetail',
  mounted() {
    showloadin()
    jsonp(io_detail, {path: this.$route.path}).then(res => $dom(res.body)).then($ => {
      this.info = workInfor($)
      this.show = workShow($)
      this.userinfo = getUserInfoMin($)
      hideloadin()
    })
  },
  data () {
    return {
      info: '',
      show: '',
      userinfo: {}
    }
  }
}
</script>

<style lang="less">
.detail_content{
  li {
    list-style: none;
  }
  &_info {
    margin-bottom: 15px;
  }
  &_show {
    .wsContent{
      font-size: 0;
    }
    .wsDes p{
      line-height: 1.4;
      margin: 6px auto;
    }
  }
}
</style>
