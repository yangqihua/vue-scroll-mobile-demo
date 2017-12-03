<template>
  <div ref="wrapper" class="list-wrapper">
    <div class="scroll-content">
      <div ref="list">
        <slot></slot>
      </div>
      <slot name="pullup">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <loading></loading>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Loading from './loading.vue'
  import {getRect} from '../../utils/dom'

  export default {
    name: 'BetterScroll',
    components: {
      Loading,
    },
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      /**
       * 文档：https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options-advanced.html#pullupload
       * 有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
       * 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
       * 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
       * 如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * better-scroll 默认会阻止浏览器的原生 click 事件。
       * 当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true
       */
      click: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'vertical'
      },
      scrollbar: {
        type: null,
        default: true
      },
      // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
      pullUpLoad: {
        type: null,
        default: false
      },
      // 纵轴方向初始化位置
      startY: {
        type: Number,
        default: 0
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      // 有些场景我们需要支持横向和纵向同时滚动，而不仅限制在某个方向，这个时候我们只要设置 freeScroll 为 true 即可。
      freeScroll: {
        type: Boolean,
        default: false
      },
      // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
      bounce: {
        type: Boolean,
        default: true
      },
      /**
       * 是否监听滚动 scroll 事件
       * 回调参数为{Object} {x, y} 滚动的实时坐标
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 是否监听滚动 beforeScrollStart 事件
       */
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 是否监听滚动 touchEnd 事件
       * 回调参数为 {Object} {x, y} 滚动结束的位置坐标
       */
      listenScrollEnd: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        isPullUpLoad: false,
        pullUpDirty: true,
      }
    },
    computed: {
      pullUpTxt() {
        const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || ''
        const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || '暂无更多数据'
        return this.pullUpDirty ? moreTxt : noMoreTxt
      },
    },
    mounted() {
      setTimeout(() => {
        this.initScroll()
      }, 20)
    },
    methods: {
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // 避免数据过少无法上拉加载数据
        if (this.$refs.list && (this.pullDownRefresh || this.pullUpLoad)) {
          this.$refs.list.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
        }

        let options = {
          probeType: this.probeType,
          click: this.click,
          scrollbar: this.scrollbar,
          pullUpLoad: this.pullUpLoad,
          startY: this.startY,
          bounce: this.bounce,
        }

        this.scroll = new BScroll(this.$refs.wrapper, options);

        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        if (this.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScrollStart')
          })
        }
        if (this.listenScrollEnd) {
          this.scroll.on('scrollEnd', (pos) => {
            this.$emit('scrollEnd')
          })
        }
        if (this.pullUpLoad) {
          this._initPullUpLoad()
        }
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },

      destroy() {
        this.scroll.destroy()
      },
      forceUpdate(dirty) {
        if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          this.refresh()
        } else {
          this.refresh()
        }
      },
      _initPullUpLoad() {
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
      },
    },
    watch: {
      data() {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      }
    }
  }

</script>

<style lang="less" rel="stylesheet/less">
  .list-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #fff;
  }

  .pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
  }
</style>
