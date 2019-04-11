<template lang="pug">
  div.main
    div.works__title
      h1 works
      h2 制作アプリ、参画プロジェクト等

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

  .works__title
    width calc(100% - 32px)
    height 328px
    margin 32px 16px
    overflow hidden
    border-radius 10px
    box-shadow 0 3px 6px #ccc
    display flex
    flex-direction column
    justify-content center
    align-items center
    h2
      font-size 16px
</style>


