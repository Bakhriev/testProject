import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
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
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const img = document.querySelector('[data-main-img]')
	swiper2.on('click', () => {
		const activeIndex = swiper2.clickedIndex
		img.src = `./assets/img/${activeIndex + 1}.jpg`
	})

	function initSlide() {
		const activeIndex = swiper2.activeIndex
		img.src = `./assets/img/${activeIndex + 1}.jpg`
	}

	initSlide()

	const modal = document.querySelector('.modal-1')
	const modalBtns = document.querySelectorAll('.hero__modal-btns button')
	const closeBtn = document.querySelector('.modal__close')
	const body = document.querySelector('body')

	const burger = document.querySelector('.burger')
	const mobileMenu = document.querySelector('.header-mobile')
	const overlay = document.querySelector('.overlay')

	closeBtn.addEventListener('click', () => {
		removeActiveClass([modal, overlay])
		body.classList.remove('disable-scroll')
	})

	overlay.addEventListener('click', () => {
		removeActiveClass([overlay, modal, burger, mobileMenu])
		body.classList.remove('disable-scroll')
	})

	modalBtns.forEach(modalBtn => {
		modalBtn.addEventListener('click', () => {
			addActiveClass([modal, overlay])
			body.classList.add('disable-scroll')
		})
	})

	function handleBurgerMenu() {
		burger.addEventListener('click', () => {
			toggleActiveClass([burger, overlay, mobileMenu])
			body.classList.toggle('disable-scroll')
		})

		window.addEventListener('resize', () => {
			const {innerWidth} = window
			if (innerWidth > 991.98) {
				body.classList.remove('disable-scroll')
				removeActiveClass([mobileMenu, modal, overlay, burger])
			}
		})
	}

	handleBurgerMenu()

	function toggleActiveClass(elements) {
		elements.forEach(elem => elem.classList.toggle('active'))
	}

	function addActiveClass(elements) {
		elements.forEach(elem => elem.classList.add('active'))
	}

	function removeActiveClass(elements) {
		elements.forEach(elem => elem.classList.remove('active'))
	}
})
