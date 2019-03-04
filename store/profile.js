import icon from '~/assets/icon.svg'

export const getters = {
  profile: () =>
    ({
      src: icon,
      job: 'Web Enginner',
      name: '大同太郎',
      ruby: 'DAIDO Taro',
      texts: [
        '# JavaScript',
        '# Python',
        '# HTML',
        '# CSS',
      ],
    })
}