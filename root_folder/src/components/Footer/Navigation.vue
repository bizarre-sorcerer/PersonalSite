<template>
  <!-- 2-ая часть - "Навигация" -->
  <div class="content-element-container">

    <!-- Контейнер чтобы центрировать весь контент по секции -->
    <div class="inner-content-container" id="footer-navigation-container">
      <h3 class="footer-heading">Навигация</h3>

      <div class="footer-navigation">
        <div class="footer-menu-element"><a class="footer-nav-link" href="#about-page">about</a></div>
        <div class="footer-menu-element"><a class="footer-nav-link" href="#services-page">services</a></div>
        <div class="footer-menu-element"><a class="footer-nav-link" href="#footer">learn more</a></div>             
      </div>
    </div>
  </div>
      
</template>

<script>
  import "../../assets/css/Desktop-styles/footer.css"

	export default {
		name: "Navigation"
	}
</script>