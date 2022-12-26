export default function(strings: TemplateStringsArray, ...vars: any[]) {
	const parser = new DOMParser();
	const htmlText = String.raw(strings, ...vars);
	const parsed = parser.parseFromString(htmlText, 'text/html');

	const fragment = document.createDocumentFragment();
	parsed.body.childNodes.forEach((node) => fragment.appendChild(node));

	return fragment;
}
