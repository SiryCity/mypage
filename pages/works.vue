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
  head () {
    return {
      title: '制作物一覧',
    }
  },
  components: {
    WorksArea
  }
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  min-height calc(var(--static100vh, 100vh) - 20px)
  padding-top calc(var(--static100vh, 100vh) / 2 - 164px)
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  align-content flex-start
</style>


