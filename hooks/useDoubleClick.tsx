import { useCallback, useRef } from 'react'

export const useDoubleClick = (click, doubleClick, timeout = 200) => {
  // using useRef here for the useCallback to remember the timeout
  const clickTimeout = useRef(0)

  const clearClickTimeout = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout.current)
      clickTimeout.current = undefined
    }
  }

  // return a memoized callback that only changes if dependencies has changed
  return useCallback(
    event => {
      clearClickTimeout()
      if (click && event.detail === 1) {
        clickTimeout.current = setTimeout(() => {
          click(event)
        }, timeout)
      }
      if (event.detail % 2 === 0) {
        doubleClick(event)
      }
    },
    [click, doubleClick, timeout],
  )
}
