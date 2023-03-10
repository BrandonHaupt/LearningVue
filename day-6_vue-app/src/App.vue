<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// this is how we import styles and use them in our app.vue
import './components/styles.css'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
