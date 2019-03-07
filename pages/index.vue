<template lang="pug">
  div.main
    profile-area
    news-area
</template>

<script>
import NewsArea from '~/components/NewsArea.vue'
import ProfileArea from '~/components/ProfileArea.vue'

export default {
  components: {
    NewsArea,
    ProfileArea
  },
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  height calc(var(--static100vh, 100vh) - 20px)
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  align-content center
</style>


