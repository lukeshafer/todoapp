import type { APIRoute } from 'astro';
import { z } from 'zod';
import { client } from '../../db';

const taskInputSchema = z.object({
	id: z.string(),
	completed: z.preprocess((arg) => arg === 'true', z.boolean()),
});
export type TaskCompletionInput = z.infer<typeof taskInputSchema>;
export const post: APIRoute = async ({ request, redirect }) => {
	try {
		const data = await request.text();

		const params = Object.fromEntries([
			...new URLSearchParams(data).entries(),
		]);
		const parseResult = taskInputSchema.safeParse(params);

		if (!parseResult.success) {
			return new Response(JSON.stringify({ status: 400 }));
		}

		await client.task.delete({
			where: { id: parseResult.data.id },
		});

		return redirect('/', 302);
	} catch {
		console.error('delete task');
		return new Response(null, {
			status: 500,
			statusText: 'Uh oh!',
		});
	}
};
