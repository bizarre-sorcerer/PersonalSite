<template>
    <div class="header" id="header">
      <!-- Мое имя, первый элемент хэдера -->
      <div class="menu-element" id="My-name">Sharipov Aidar</div>
  
      <!-- Надпись Portfolio, воторой элемент хэдера -->
      <div id="header-text-portfolio"><a href="#landing-page">Portfolio</a></div>
  
      <div class="menu-container">
        <div class="menu-dropdown">
          <i class="fa fa-bars" id="menu-img" aria-hidden="true"></i>
  
          <div class="menu" id="dropdown-content">
            <!-- Отдельные элементы навигации -->
            <div class="menu-element" id="about-menu-element"><a href="#">stack</a></div>
            <div class="menu-element" id="services-menu-element"><a href="#">services</a></div>
            <div class="menu-element" id="contact-me-button"><a class="contact-me-a" href="#footer">Contact me</a></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import "../assets/css/Desktop-styles/header.css"

export default {
	name: 'Header'
}

</script>
