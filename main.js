document.addEventListener("DOMContentLoaded", function () {
	const faqItems = document.querySelectorAll(".faq-item")

	faqItems.forEach((item) => {
		item.querySelector(".faq-question").addEventListener("click", () => {
			item.classList.toggle("active")

			const icon = item.querySelector(".faq-icon")
			icon.textContent = item.classList.contains("active") ? "−" : "+"
		})
	})
})
