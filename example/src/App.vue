<template>
  <div id="app" :class="{ mobile: media.mobile }">
    <p>{{ media }}</p>
    <p>{{ otherMedia }}</p>
  </div>
</template>

<script>
import { createMedia, useMedia } from '../../index'
import { watchEffect } from 'vue'

export default {
  name: 'App',
  setup() {
    const media = useMedia()
    const otherMedia = createMedia({
      mini: 'screen and (max-width: 480px)'
    })
    watchEffect(() => console.log("Current media has mobile:", media.current.includes('mobile')))

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
.mobile {
  background-color: lightblue;
  border-radius: 8px;
  padding: 24px;
}
</style>
