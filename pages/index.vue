<template lang="pug">
  div.main
    icon-area(:icon='icon')
    profile-area
      h3 名古屋発Webエンジニア
      h1 水谷竜斗
      h2 MIZUTANI Ryuto
      p 1994年、名古屋に誕生。
      p.
        2017-19年、大同大学 大学院 情報学研究科にてWebエンジニアリングを専攻。
        2019年、在学中にエンジニアとして個人活動を開始。
    icon-area(:icon='js')
    profile-area
      h4 I ♥ JavaScript
      p.
        主としてJavaScript、時々PythonやPHPを用いて開発を行っています。
        WebアプリケーションやPRサイトの制作、業務効率化システムの開発など... 
        活動で得た知見は各所で発信しています。
      div.link-area
        a(href='https://twitter.com/sirycity'): img(:src='twitter')
        a(href='https://github.com/SiryCity'): img(:src='github')
        a(href='https://jsnotice.com'): img(:src='icon')
    icon-area(:icon='photo')
    profile-area
      h4 I ♥ challenging
      p.
        メンバーは中小規模の団体や学生が殆ど。
        当たって砕けろの精神で最新技術を積極的に導入しています!
        最新のWeb技術で面白いコンテンツを作りたい、なんて考えていませんか?ぜひとも
      nuxt-link.link-box(to='/contact') お話を聞かせてください :)
    icon-area(:icon='nagoya')
    profile-area
      h4 I ♥ Nagoya
      p.
        生まれ育った名古屋を拠点に活動しています。 
        名古屋は重工業の街ですが、だからこそITの可能性が溢れていると感じます。
        RPA(業務効率化)に関するWebシステムをお考えの方も、
      nuxt-link.link-box(to='/contact') ご連絡お待ちしております :)
    
        
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
      title: '水谷竜斗 | 名古屋発Webエンジニア',
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


