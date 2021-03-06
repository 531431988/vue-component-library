import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { LoadingBar } from 'iview'
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'hash'
})

router.afterEach(to => {
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
