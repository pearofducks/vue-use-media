# @v-use/media (or) vue-use-media

A Vue 3 plugin for matchMedia

## install

```shell
yarn add @v-use/media
```

## use

There are two ways to use this module.

##### 1. If you want your entire app to share a set of media-queries

```javascript
import { createApp } from 'vue'
import { setupMedia } from '@v-use/media'

createApp(App).use(setupMedia).mount('#app') // use the default breakpoints
```

```javascript
import { useMedia } from '@v-use/media'

export default {
  setup: () => ({
    media: useMedia()
  })
}
```

##### 2. If you want different parts of your app to use specific queries

```javascript
import { createMedia } from '@v-use/media'

const localMedia = createMedia({ breakpoints })
```

## api

### createMedia

```javascript
import { createMedia } from '@v-use/media'

const media = createMedia({ breakpoints? })
```

Returns `media` - documented below

### setupMedia

```javascript
import { setupMedia } from '@v-use/media'

createApp(App).use(setupMedia, { injectKey?: (String | Symbol), breakpoints?: Object }).mount('#app')
```

`media` will then be available via `useMedia`

#### injectKey

An optional parameter to control the injection key used in `useMedia`

Default: 'media'

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

### useMedia

Returns the `media` set up globally via `setupMedia`

### media

```javascript
reactive({
  mediaName: Boolean,
  current: Array
})
```

`mediaName` aligns with each one specified in `breakpoints`, and will dynamically update as the `mediaQuery` changes

`current` is an array of `mediaName`s that currently evaluate to `true`
