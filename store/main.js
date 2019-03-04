
export const getters = {
  isSP: () => /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
}