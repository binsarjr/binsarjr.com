// Animation utilities using Svelte actions and native animations

export interface AnimationOptions {
	delay?: number;
	duration?: number;
	easing?: string;
	threshold?: number;
	once?: boolean;
}

// Base animation function using Intersection Observer
function createObserverAnimation(
	node: HTMLElement,
	animationFn: (node: HTMLElement) => void,
	options: AnimationOptions = {}
) {
	const { delay = 0, threshold = 0.1, once = true } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						animationFn(node);
					}, delay);
					if (once) {
						observer.unobserve(node);
					}
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

// Fade up animation
export function fadeUp(node: HTMLElement, options: AnimationOptions = {}) {
	const { duration = 800, easing = 'ease-out' } = options;

	// Set initial state
	node.style.opacity = '0';
	node.style.transform = 'translateY(30px)';
	node.style.transition = `all ${duration}ms ${easing}`;

	return createObserverAnimation(
		node,
		(el) => {
			el.style.opacity = '1';
			el.style.transform = 'translateY(0)';
		},
		options
	);
}

// Fade in animation
export function fadeIn(node: HTMLElement, options: AnimationOptions = {}) {
	const { duration = 800, easing = 'ease-out' } = options;

	node.style.opacity = '0';
	node.style.transition = `opacity ${duration}ms ${easing}`;

	return createObserverAnimation(
		node,
		(el) => {
			el.style.opacity = '1';
		},
		options
	);
}

// Fade left animation
export function fadeLeft(node: HTMLElement, options: AnimationOptions = {}) {
	const { duration = 800, easing = 'ease-out' } = options;

	node.style.opacity = '0';
	node.style.transform = 'translateX(30px)';
	node.style.transition = `all ${duration}ms ${easing}`;

	return createObserverAnimation(
		node,
		(el) => {
			el.style.opacity = '1';
			el.style.transform = 'translateX(0)';
		},
		options
	);
}

// Fade right animation
export function fadeRight(node: HTMLElement, options: AnimationOptions = {}) {
	const { duration = 800, easing = 'ease-out' } = options;

	node.style.opacity = '0';
	node.style.transform = 'translateX(-30px)';
	node.style.transition = `all ${duration}ms ${easing}`;

	return createObserverAnimation(
		node,
		(el) => {
			el.style.opacity = '1';
			el.style.transform = 'translateX(0)';
		},
		options
	);
}

// Zoom in animation
export function zoomIn(node: HTMLElement, options: AnimationOptions = {}) {
	const { duration = 800, easing = 'ease-out' } = options;

	node.style.opacity = '0';
	node.style.transform = 'scale(0.8)';
	node.style.transition = `all ${duration}ms ${easing}`;

	return createObserverAnimation(
		node,
		(el) => {
			el.style.opacity = '1';
			el.style.transform = 'scale(1)';
		},
		options
	);
}

// Slide in from bottom
export function slideInBottom(node: HTMLElement, options: AnimationOptions = {}) {
	const { duration = 800, easing = 'ease-out' } = options;

	node.style.opacity = '0';
	node.style.transform = 'translateY(50px)';
	node.style.transition = `all ${duration}ms ${easing}`;

	return createObserverAnimation(
		node,
		(el) => {
			el.style.opacity = '1';
			el.style.transform = 'translateY(0)';
		},
		options
	);
}

// Fade down animation
export function fadeDown(node: HTMLElement, options: AnimationOptions = {}) {
	const { duration = 800, easing = 'ease-out' } = options;

	node.style.opacity = '0';
	node.style.transform = 'translateY(-30px)';
	node.style.transition = `all ${duration}ms ${easing}`;

	return createObserverAnimation(
		node,
		(el) => {
			el.style.opacity = '1';
			el.style.transform = 'translateY(0)';
		},
		options
	);
}
