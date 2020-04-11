import { reactive } from 'vue'

const Media = {}


const defaultBreakpoints = {
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 769px)'
}

const install = (app, { injectKey = 'media', breakpoints = defaultBreakpoints } = {}) => {
  const _ = reactive({
    current: null,
    ...Object.keys(breakpoints).reduce((acc,e) => (acc[e] = null, acc), {})
  })

  app?.provide(injectKey, _)

  Object.entries(breakpoints).forEach(([media, queryString]) => {
    const query = window.matchMedia(queryString)
    const callback = (e) => {
      _[media] = e.matches
      _.current = Object.keys(_).filter(e => e !== 'current' && _[e])
    }
    query.addListener(callback)
    callback(query)
  })

  return _
}

Media.install = install

export const useMedia = breakpoints => install(null, { breakpoints })
export default Media
