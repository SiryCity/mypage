<template lang="pug">
  div.main
    works-area(
      v-for='(works, i) in $store.getters["works/works"]'
      :works = 'works'
      :key='`works${i}`'
    )
</template>

<script>
import WorksArea from '~/components/WorksArea.vue'
export default {
  components: {
    WorksArea
  }
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  min-height calc(100vh - 20px)
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  align-content flex-start
</style>


