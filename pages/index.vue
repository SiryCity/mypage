<template lang="pug">
  div.main
    icon-area(:icon='icon')
    profile-area
      h3 Web Engineer & Web Designer
      h1 水谷竜斗
      h2 MIZUTANI Ryuto
      p 1994.11.15 (24)
      p.
        2017-19年、大同大学 大学院 情報学研究科にてWebエンジニアリングを専攻。
        2019年、在学中にフリーランスエンジニアとして活動を開始。
    icon-area(:icon='js')
    profile-area
      h4 I ♥ JavaScript
      p.
        参画したプロジェクトでは主にJavasctipt、時々Pythonを用いて開発を行っています。
        WebアプリケーションやPRサイトの制作、業務効率化システムの開発など... 
        活動で得た知見は各所で発信しています。
      div.link-area
        nuxt-link(to='https://twitter.com/sirycity'): img(:src='twitter')
        nuxt-link(to='https://github.com/SiryCity'): img(:src='github')
    icon-area(:icon='photo')
    profile-area
      h4 I ♥ challenging
      p.
        ご依頼の相手は中小規模の団体や学生が殆ど。
        どなたも斬新なWebコンテンツを考案し、成功に向けて精力的に活動されています。
        少ない予算で大きな夢をお持ちの方、
      nuxt-link.link-box(to='/contact') ご連絡お待ちしております :)
    icon-area(:icon='nagoya')
    profile-area
      h4 I ♥ Nagoya
      p.
        私自身が生まれ育った名古屋を拠点に活動しています。 
        名古屋は重工業の街ですが、だからこそITの可能性が溢れていると感じます。
        RPA(業務効率化)に関するWebシステムをお考えの方も、
      nuxt-link.link-box(to='/contact') お話を聞かせてください :)
    
        
</template>

<script>
import IconArea from '~/components/IconArea.vue'
import ProfileArea from '~/components/ProfileArea.vue'

import icon from '~/assets/icon.svg'
import photo from '~/assets/photo.svg'
import js from '~/assets/js.svg'
  import link from '~/assets/link.svg'
  import twitter from '~/assets/twitter.svg'
  import github from '~/assets/github.svg'
import nagoya from '~/assets/nagoya.svg'

export default {
  head: () => 
    ({
      titleTemplate: null,
      title: '水谷竜斗 | Webエンジニア',
    }),
  components: {
    IconArea,
    ProfileArea
  },
  computed: {
    icon: () => icon,
    photo: () => photo,
    js: () => js,
      link: () => link,
      twitter: () => twitter,
      github: () => github,
    nagoya: () => nagoya
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
  justify-content center
  align-items center
  align-content center

.link-box
  width 100%
  text-decoration none
  &:hover
    text-decoration underline
</style>


