<template>
	<!-- 4-ая часть - "Контакты" -->
	<div class="content-element-container">
		<!-- Контейнер чтобы центрировать весь контент по секции -->
		<div class="inner-content-container">
			<h3 class="footer-heading">Контакты</h3>

			<div class="text-contacts">
				<div class="contacts-container" id="geolocation">
					<img id="geolocation-img" src="../../assets/imgs/footer/geolocation.jpg" alt="resource not found">
					<span class="contacts-text">- г. Алматы</span>
				</div>
				
				<div class="contacts-container" id="phone-number">
					<img src="../../assets/imgs/footer/phoneNumber.jpg" alt="resource not found">
					<span class="contacts-text">- 8 707-531-10-56</span>
				</div>
				
				<div class="contacts-container" id="gmail">
					<img id="gmail-img" src="../../assets/imgs/footer/gmail.jpg" alt="resource not found">
					<span class="contacts-text">- bizarreSorcerer@gmail.com</span>
				</div>
			</div>

			<div class="image-link-contacts">
				<img class="footer-icon" id="whatsapp-icon-footer" src="../../assets/imgs/mini_footer/whatsapp.png" alt="resource not found">
				
				<img class="footer-icon" src="../../assets/imgs/mini_footer/telegram-logo.png" alt="resource not found">
				
				<svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
						0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
						1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
						0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0
						1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87
						3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016
						8c0-4.42-3.58-8-8-8z"></path>
					</svg>  
			</div>
		</div>
	</div>
</template>

<script>
import "../../assets/css/Desktop-styles/Footer/footer.css"
import "../../assets/css/Desktop-styles/Footer/contacts.css"
import "../../assets/css/Desktop-styles/Footer/copyright.css"

export default {
	name: "Navigation"
}
</script>