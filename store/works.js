import shibata279 from '~/assets/works/shibata279.jpg'

export const getters = {
  works: () =>
    [
      {
        src: null,
        title: 'JavaScriptに関するお知らせ',
        url: '',//'https://notice-js.com/',
        org: '個人制作',
        join: 2019,
        text: 'JavaScriptを中心とした技術ブログ。3/25(月)公開。',
      },
      {
        src: shibata279,
        title: '柴田アクティブストリート',
        url: 'https://shibataactivestreet.com/',
        org: '名古屋市南区様',
        join: 2017,
        text: '名古屋市商店街にぎわい創出事業から誕生した商店街活性化プロジェクト。',
      },
      {
        src: null,
        title: 'RPA(業務効率化)',
        url: null,
        org: '匿名希望様',
        join: 2018,
        text: '既存のネットショップと社内データベースの統合と自動化。',
      },
      {
        src: null,
        title: '四文字予定',
        url: null,
        org: '個人制作',
        join: 2019,
        text: 'シンプルな予定表アプリ。4月公開予定!',
      },
    ]
}