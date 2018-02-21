import Vue from 'vue'

// declaring a component:
Vue.component('app', {
  template: `
    <div id="app">
      <nav class="nav has-shadow">
        <div class="container">
          <a href="/">
            <img src="http://bit.ly/vue-img"
             alt="Vue SPA" />
          </a>
        </div>
      </nav>
      <section class="main-section section"></section>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            Follow us on le
            <a href="https://twitter.com/i_m_bjim" target="_blank">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  `
})

const app = new Vue({
  render: h => h('app')
})

export { app }
