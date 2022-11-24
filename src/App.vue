<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Head from './components/Head/Head';
import Footer from './components/Footer/Footer'




export default {
  name: 'App',
  components: {
    Head, Footer
  },
  mounted(){
    this.$store.dispatch("categoryList")
  }
}
</script>

<style>

</style>
