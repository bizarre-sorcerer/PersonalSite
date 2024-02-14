<template>
<!-- Футер -->
<div id="footer">
    <!-- Весь контент футера, кроме копирайта -->
    <div class="all-content-container">
      <!-- Контент футера делиться на 4 части -->

      <!-- 1-ая часть - "Про меня" -->
      <About />

      <!-- 2-ая часть - "Навигация" -->
      <Navigation />

      <!-- 3-ая часть - "Сервисы" -->
      <Services />

      <!-- 4-ая часть - "Контакты" -->
      <Contacts />
    </div>

    <!-- Копирайт -->
    <div class="copyright-container">
      <span id="copyright-text">&copy;2023 made by Aidar</span>
    </div>
  </div>

</template>

<script>
import "../../assets/css/Desktop-styles/Footer/footer.css"
import About from "./About.vue"
import Navigation from "./Navigation.vue"
import Services from "./Services.vue"
import Contacts from "./Contacts.vue"

export default{
  name: "Footer",
  components: {
    About, Navigation, Services, Contacts
  }
}

</script>
