<template lang="pug">
  div.main
    icon-area
    profile-area
</template>

<script>
import IconArea from '~/components/IconArea.vue'
import ProfileArea from '~/components/ProfileArea.vue'

export default {
  components: {
    IconArea,
    ProfileArea
  },
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
  align-content center
</style>


