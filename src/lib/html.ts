export default function (strings: TemplateStringsArray, ...vars: any[]) {
	return String.raw(strings, ...vars);
}
