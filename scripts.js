// ! ===== scrollTop =====

function scrollToHandler() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}


// ! ===== scroll to section =====

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}