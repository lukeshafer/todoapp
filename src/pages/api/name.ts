import type { APIRoute } from "astro";

export const post: APIRoute = async ({ url, cookies, redirect }) => {
	const name = url.searchParams.get("name")?.toLowerCase();
	console.log(name);

	if (!name) {
		console.log("no name provided");
		return new Response(null, {
			status: 400,
			statusText: "Name not provided",
		});
	}

	if (name !== "luke" && name !== "anahita") {
		console.log("invalid name provided");
		return new Response(null, {
			status: 400,
			statusText: "Name not valid",
		});
	}

	cookies.set("name", name, {
		path: "/",
	});

	return redirect("/", 302);
};
