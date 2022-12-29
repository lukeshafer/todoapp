type EffectCallback = () => void;

const effectStack = new Set<EffectCallback>();

export type Signal<T> = [() => T, (newValue: T) => void];

export const createSignal = <T>(initialValue: T) => {
	let value = initialValue;
	const callbacks: EffectCallback[] = [];
	const reader = () => {
		effectStack.forEach((cb) => callbacks.push(cb));
		return value;
	};
	const writer = (newValue: T) => {
		callbacks.forEach((cb) => cb());
		value = newValue;
	};
	return [reader, writer] as Signal<T>;
};

export const createEffect = (callback: EffectCallback) => {
	effectStack.add(callback);
	callback();
	effectStack.delete(callback);
};
