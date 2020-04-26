import { createApp, watchEffect } from '/web_modules/vue/dist/vue.esm-bundler.js';
import { setupMedia, createMedia, useMedia } from '/web_modules/@v-use/media.js'

const component = {
  name: 'demo',
  template: `
    <div id="app" :class="{ mobile: media.mobile }">
      <p>{{ media }}</p>
      <p>{{ otherMedia }}</p>
    </div>
  `,
  setup() {
    const media = useMedia()
    const otherMedia = createMedia({
      mini: 'screen and (max-width: 480px)'
    })
    watchEffect(() => console.log("Current media has mobile:", media.current.includes('mobile')))

    return { media, otherMedia }
  }
}

createApp(component).use(setupMedia).mount('#app')
