import type { APIRoute } from "astro"
import { client } from "../../db"

export const get: APIRoute = async ({ url }) => {
	const name = url.searchParams.get('name')
	if (!name) return new Response(null, {
		status: 400,
		statusText: "Name not provided"
	})

	const user = await client.user.findFirst({ where: { name } })
	if (!user) return new Response(null, {
		status: 404,
		statusText: "Requested user does not exist"
	})

	return new Response(user.id, {
		status: 200,
	})

}
