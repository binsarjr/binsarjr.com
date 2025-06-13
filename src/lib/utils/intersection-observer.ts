// intersection-observer.ts
export function createIntersectionObserver(
	callback: (entries: IntersectionObserverEntry[]) => void,
	options: IntersectionObserverInit = {}
): IntersectionObserver | null {
	// Check if browser supports Intersection Observer
	if (typeof window === 'undefined' || !window.IntersectionObserver) {
		return null;
	}

	const defaultOptions: IntersectionObserverInit = {
		threshold: 0.1,
		rootMargin: '50px',
		...options
	};

	return new IntersectionObserver(callback, defaultOptions);
}

export function observeElement(
	element: Element,
	onIntersect: (entry: IntersectionObserverEntry) => void,
	onExit?: (entry: IntersectionObserverEntry) => void,
	options?: IntersectionObserverInit
): (() => void) | null {
	const observer = createIntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				onIntersect(entry);
			} else if (onExit) {
				onExit(entry);
			}
		});
	}, options);

	if (!observer) {
		// Fallback: immediately trigger the intersection callback
		const mockEntry = {
			isIntersecting: true,
			target: element
		} as IntersectionObserverEntry;
		onIntersect(mockEntry);
		return null;
	}

	observer.observe(element);

	// Return cleanup function
	return () => {
		observer.unobserve(element);
		observer.disconnect();
	};
}

// Utility for animating elements when they come into view
export function animateOnIntersect(
	element: Element,
	animationClass: string,
	options?: IntersectionObserverInit
): (() => void) | null {
	return observeElement(
		element,
		(entry) => {
			// Add animation class when element comes into view
			entry.target.classList.add(animationClass);
		},
		undefined,
		{
			threshold: 0.1,
			rootMargin: '50px',
			...options
		}
	);
}
