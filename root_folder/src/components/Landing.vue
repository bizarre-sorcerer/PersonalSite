<template>
  <!-- Главная страница -->
  <div class="wrapper" id="landing-page">
    <!-- Контейнер с главным контентом с width:70vw, чтобы центрировать его по экрану -->
    <div class="main-content-container">
      <!-- Контейнер со всем текстом -->
      <div class="main-text-container">
        <!-- Весь текст -->
        <h1 id="welcomeText">Welcome</h1>

        <p id="first-p">Я программист специализирующийся как и в области Front-End веб-технологий, так и
            программирования на Python.</p>

        <p id="second-p">Ознакомьтесь с моими проектами, чтобы увидеть все от простых сайтов
            визиток и 2д игр до компьютерного зрения и разпознования объектов.	</p>
            
        <p id="third-p">Я постоянно работаю над саморазвитием и стремлюсь к лучшей версии себя</p>
      </div>
      
      <!-- Контейнер с главным изображение -->
      <div class="image-container">
        <img id="web-dev-img" src="../assets/imgs/web-dev-img.png" alt="resource not found">
      </div>
    </div>

    <!-- Надпись "Junior Front-End/Python Developer" в самом низу главной секции -->
    <div class="bottom-text">
      <span>Junior Front-End/Python Developer</span>
    </div>
  </div>
</template>

<script>
import "../assets/css/Desktop-styles/landing_page.css"

export default{
  name: "Landing"
}

</script>

