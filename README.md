# @v-use/media (or) vue-use-media

A Vue 3 plugin for matchMedia

## install

```shell
yarn add @v-use/media
```

## use

There are two ways to use this module.

1. If you want your entire app to share a set of media-queries

```javascript
import { createApp } from 'vue';
import media from '@v-use/media'

createApp(App).use(media).mount('#app') // use the default breakpoints
```

Then in your components:

```javascript
import { inject } from 'vue'

export default {
  setup() {
    const media = inject('media') // 'media' is the default, you may specify an alternate key
    return { media }
  }
}
```

2. If you want different parts of your app to use specific queries

```javascript
import { useMedia } from '@v-use/media'

const localMedia = useMedia({ breakpoints })
```

## api

### useMedia

```javascript
import { useMedia } from '@v-use/media'

const media = useMedia({ breakpoints? })
```

Returns `media` - documented below

### media.install (default export)

```javascript
import media from '@v-use/media'

createApp(App).use(media, { injectKey?: (String | Symbol), breakpoints?: Object }).mount('#app')
```

`media` will be available via `inject` in each component - documented below

#### injectKey

An optional parameter to control the injection key used for provide/inject

#### breakpoints

Breakpoints are specified as an object of the form:

```javascript
{
  mediaName: mediaQuery
}
```

For example the default breakpoints are:

```javascript
{
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 769px)'
}
```

### media

```javascript
reactive({
  mediaName: Boolean,
  current: Array
})
```

`mediaName` aligns with each one specified in `breakpoints`, and will dynamically update as the `mediaQuery` changes
