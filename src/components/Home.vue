<template>
  <scroller lock-x use-pullup
    v-model="status"
    @on-pullup-loading="pullup"
    height="-52"
    ref="scroller">
    <div>
      <swiper loop auto :aspect-ratio="350/900" dots-class="cc_dots">
        <swiper-item class="black" v-for="(img, index) in data.showbox" :key="index"
          :style="{background:'url('+img.image+') center center / cover no-repeat'}">
        </swiper-item>
      </swiper>
      <content-nav />
      <div class="part"></div>
      <div class="content_photo">
        <c-panel :list="data.list" />
      </div>
    </div>

    <!--pullup slot { pullupStatus : default , up , down , loading } -->
    <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up">
      <span class="pullup-arrow iconfont" v-show="status.pullupStatus !== 'loading'"
        :class="{'rotate': status.pullupStatus === 'down'}">&#xe7a8;</span>
      <span v-show="status.pullupStatus === 'loading'">
        <load-more tip="努力加载中" class="cc_loadmore"></load-more>
      </span>
    </div>
  </scroller>
</template>

<script>
import { Swiper, SwiperItem, Scroller, LoadMore } from 'vux'
import cPanel from './Panel'
import ContentNav from './ContentNav'

export default {
  components: {
    Swiper,
    SwiperItem,
    Scroller,
    LoadMore,
    cPanel,
    ContentNav
  },
  activated () {
    this.$refs.scroller.reset()
  },
  computed: {
    data() {
      this.$nextTick(() => {
        this.status.pullupStatus = 'default'
        this.$refs.scroller.reset()
      })
      return this.$store.state.base_data
    }
  },
  methods: {
    pullup() {
      this.$store.dispatch('getListBy', ++this.page)
    }
  },
  data () {
    return {
      page: 1,
      status: {
        pullupStatus: 'default'
      }
    }
  }
}
</script>

<style lang="less">
@import "../style/mixin.less";

.content_photo{
  background: #fff;
}

.cc_dots{
  bottom: 5px !important;
  .vux-icon-dot {
    background-color: rgba(255, 255, 255, .4) !important;
    &.active {
      background-color: #8AEEB1 !important;
    }
  }
}
.cc_loadmore{
  margin: 0 auto 5px !important;
  span {
    color: @color_desc;
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
