<template>
  <Header />

  <Mini_footer />

  <Landing />

  <Footer />  
</template>

<script>
import "./assets/css/global.css"
import Header from "./components/Header.vue"
import Mini_footer from "./components/Mini_footer.vue";
import Landing from "./components/Landing.vue";
import Footer from "./components/Footer/Footer.vue"

export default {
  name: 'App',
  components: {
    Header, Mini_footer, Landing, Footer
  }
}

</script>
