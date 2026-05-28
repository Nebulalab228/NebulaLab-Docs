import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import NavControls from './components/NavControls.vue'
import NavScreenControls from './components/NavScreenControls.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NavControls),
      'nav-screen-content-after': () => h(NavScreenControls)
    })
  }
}
