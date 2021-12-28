import { reactive, inject } from 'vue'

export const setupMedia = {}
export let useMedia

const defaultBreakpoints = {
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 769px)'
}

const install = (app, { injectKey = 'media', breakpoints = defaultBreakpoints } = {}) => {
  const _ = reactive({
    current: null,
    ...Object.keys(breakpoints).reduce((acc,e) => (acc[e] = null, acc), {})
  })

  if (app) {
    app.provide(injectKey, _)
    useMedia = () => inject(injectKey)
  }

  Object.entries(breakpoints).forEach(([media, queryString]) => {
    const query = window.matchMedia(queryString)
    const callback = (e) => {
      _[media] = e.matches
      _.current = Object.keys(_).filter(e => e !== 'current' && _[e])
    }
    if (query.addEventListener) query.addEventListener('change', callback)
    else query.addListener(callback)
    callback(query)
  })

  return _
}

setupMedia.install = install

export const createMedia = breakpoints => install(null, { breakpoints })
