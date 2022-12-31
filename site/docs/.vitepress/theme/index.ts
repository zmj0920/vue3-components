import Theme from 'vitepress/theme'
import './style/vitepress.less'

import vueViewUi from 'vue-view-ui'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(vueViewUi)
  }
}
