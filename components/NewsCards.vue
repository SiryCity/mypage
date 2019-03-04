<template lang="pug">
  div
    div {{card.date}}
    div {{card.text}}
    hr
</template>

<script>
export default {
  props:['card'],
}
</script>

<style lang="stylus">
</style>

