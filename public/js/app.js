// Menu Animation
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

// Menu Animation

// Form Validation

const form = document.getElementById('form');
const successMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let isValid = true;

	// Name
	const nameInput = document.getElementById('name');
	const nameInputError = document.getElementById('name-error');

	if (nameInput.value.trim() === '') {
		nameInputError.classList.remove('hidden');
		isValid = false;
	} else {
		nameInputError.classList.add('hidden');
		isValid = true;
	}

	// E-Posta
	const emailInput = document.getElementById('email');
	const emailInputError = document.getElementById('email-error');
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailInput.value.trim())) {
		emailInputError.classList.remove('hidden');
		isValid = false;
	} else {
		emailInputError.classList.add('hidden');
	}

	// Phone  Number
	const phoneInput = document.getElementById('phone');
	const phoneInputError = document.getElementById('phone-error');
	if (phoneInput.value.trim() === '') {
		phoneInputError.classList.remove('hidden');
		isValid = false;
	} else {
		phoneInputError.classList.add('hidden');
	}

	// If form is valid
	if (isValid) {
		form.reset();
		successMessage.classList.remove('hidden');
		gsap.fromTo(
			successMessage,
			{ opacity: 0, y: -50 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				onComplete: () => {
					setTimeout(() => {
						gsap.to(successMessage, {
							opacity: 0,
							y: -50,
							duration: 0.5,
							onComplete: () => {
								successMessage.classList.add('hidden');
							},
						});
					}, 2000);
				},
			},
		);
	}
});

// Form Validation
