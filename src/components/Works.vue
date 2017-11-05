<template>
  <div>
    <div class="tab_menu"></div>
    <c-cell :list="content" />
  </div>
</template>

<script>
import cCell from './cell'
export default {
  components: { cCell },
  created() {
    this.$store.dispatch('getWorks')
  },
  computed: {
    content() {
      return this.$store.state.works_data
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">

</style>
