<template>
  <div id="app">
    <Header />
    <div class="wrapper pt-19">
      <!-- <vue-progress-bar /> -->
      <transition name="fade">
        <div class="block">
          <Nuxt />
        </div>
      </transition>
    </div>
    <!-- <AppFooter></AppFooter> -->
  </div>
</template>

<script>
import Vue from 'vue'

import remoteConfigMixin from '~/mixins/remoteConfig'
Vue.mixin(remoteConfigMixin)

export default {
}
</script>

<style>
#app {
  @apply antialiased;
  transition: color 700ms ease;
}

.wrapper {
  transition: margin 700ms ease;
}

.navbarMargin {
  @apply mt-6;
  transition: margin 700ms ease;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
