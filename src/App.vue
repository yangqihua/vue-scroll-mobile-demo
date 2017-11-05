<template>
  <div id="app">
    <transition name="move">
      <keep-alive :exclude="/.+Detail/">
        <router-view class="content"></router-view>
      </keep-alive>
    </transition>
    <v-nav></v-nav>
  </div>
</template>

<script>
import vNav from './components/Nav.vue'

export default {
  name: 'app',
  components: { vNav }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

.vux-1px-b:after {
  border-color: #f0f0f0;
}

.move-enter-active,
.move-leave-active {
    transition: all 0.2s ease-in-out;
}
.move-enter-active {
    transition-delay: 0.2s;
}
.move-enter,
.move-leave-active {
    opacity: 0;
    transform: translateX(80px);
}
</style>
