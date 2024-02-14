<template>
  <Header />

  <Mini_footer />
</template>

<script>
import "./assets/css/global.css"
import Header from "./components/Header.vue"
import Mini_footer from "./components/Mini_footer.vue";

export default {
  name: 'App',
  components: {
    Header, Mini_footer
  }
}
</script>
