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

// ! ===== button scroll up =====

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// === updateDashoffset - нажатие кнопки "scroll top"
const updateDashoffset = () => {
	const height = document.documentElement.scrollHeight - window.innerHeight;
	const dashoffset = pathLength - (getTop() * pathLength / height);

	scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// === onScroll - переключение класса "не активно" на "активно"
window.addEventListener('scroll', () => {
	updateDashoffset();

	if (getTop() > offset) {
		scrollUp.classList.add('scroll-up--active')
	} else {
		scrollUp.classList.remove('scroll-up--active');
	}
})

// === click - расчет заливки (сколько проскролено)
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
})

// ! ===== copyright date update =====

const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();