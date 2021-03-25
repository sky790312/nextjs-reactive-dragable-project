/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-this-alias */

/**
 * simple using, should use library better in real project.
 */
export const debounce = (func, delay: number) => {
  let isDebounced = null
  return (...args) => {
    clearTimeout(isDebounced)
    isDebounced = setTimeout(() => func(...args), delay)
  }
}

/**
 * simple using, should use library better in real project.
 */
export const throttle = (func, timeout = 250) => {
  let last
  let timer

  return function () {
    const context = this
    const args = arguments
    const now = +new Date()

    if (last && now < last + timeout) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        func.apply(context, args)
      }, timeout)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}
