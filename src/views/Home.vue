<template>
  <div class="home">
    <img alt="Vagado Quiz logo" src="../assets/logo.png">
    <Home msg="App built for the HAN-course OOSE-OOAD"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>
