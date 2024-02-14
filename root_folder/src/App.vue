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

// var matrix = [[1, 2, 3], [39.5, "Привет", 9], [true, 0.1, 31]]

// console.log(matrix[1])

// matrix[1][0] = 39.4

// console.log(matrix[1])
</script>
