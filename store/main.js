
export const mutations = {
    //画面1個分の高さをセットする
    setStatic100vh(){
      document.documentElement.style.setProperty(
        '--static100vh',
        /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
        ? window.outerHeight + 'px'
        : '100vh'
      )
    },
  
  }

export const getters = {
  isSP: () => /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
}