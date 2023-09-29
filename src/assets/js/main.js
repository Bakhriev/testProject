import {burgerMenu} from './functions/burger'
burgerMenu()

const dropdowns = document.querySelectorAll('[data-dropdown]')

dropdowns.forEach(dropdown => {
	const subMenu = dropdown.querySelector('[data-dropdown-menu]')
	dropdown.addEventListener('click', toggleSubMenu)
})

function toggleSubMenu() {
	const subMenu = this.querySelector('[data-dropdown-menu]')
	subMenu.style.maxHeight = subMenu.style.maxHeight
		? ''
		: subMenu.scrollHeight + 'px'
}

import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'

const swiper = new Swiper('.swiper-1', {
	direction: 'horizontal',
})

const swiper2 = new Swiper('.swiper-2', {
	direction: 'horizontal',
	spaceBetween: 20,

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		530: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
	modules: [Navigation],
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
const img = document.querySelector('[data-main-img]')
swiper2.on('click', () => {
	const activeIndex = swiper2.clickedIndex
	img.src = `./assets/img/${activeIndex + 1}.jpg	`
})

const initSlide = () => {
	const activeIndex = swiper2.activeIndex
	img.src = `./assets/img/${activeIndex + 1}.jpg	`
}
initSlide()

const modal = document.querySelector('.modal-1')
const btns = document.querySelectorAll('.hero__modal-btns button')
const closeBtn = document.querySelector('.modal__close')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

closeBtn.addEventListener('click', () => {
	modal.classList.remove('opened')
	overlay.classList.remove('active')
	body.classList.remove('disable-scroll')
})
overlay.addEventListener('click', () => {
	modal.classList.remove('opened')
	overlay.classList.remove('active')
	body.classList.remove('disable-scroll')
})
btns.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.classList.add('opened')
		overlay.classList.add('active')
		body.classList.add('disable-scroll')
	})
})
