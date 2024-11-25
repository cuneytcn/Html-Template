const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');

let initialState = false;

menuOpen.addEventListener('click', () => {
	document.body.classList.add('overflow-hidden');

	gsap.to(menu, {
		duration: 0.5,
		opacity: 1,
		ease: 'power2.out',
		display: 'block',
		onComplete: () => {
			menu.classList.remove('opacity-0', 'hidden');
		},
	});
	initialState = true;
});

closeMenu.addEventListener('click', () => {
	document.body.classList.remove('overflow-hidden');

	gsap.to(menu, {
		duration: 0.5,
		opacity: 0,
		ease: 'power2.in',
		display: 'none',
		onComplete: () => {
			menu.classList.add('opacity-0', 'hidden');
		},
	});
	initialState = false;
});
