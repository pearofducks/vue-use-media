<template>
  <div id="app">
    <p>{{ media }}</p>
    <p>{{ otherMedia }}</p>
  </div>
</template>

<script>
import { useMedia } from '../../index'
import { inject } from 'vue'

export default {
  name: 'App',
  setup() {
    const media = inject('media')
    const otherMedia = useMedia({
      mini: 'screen and (max-width: 480px)'
    })

    return { media, otherMedia }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
