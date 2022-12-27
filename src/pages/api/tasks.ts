import type { APIRoute } from 'astro';
import { client, getTaskListForUserByName } from '../../db';
import { z } from 'zod';
import { taskListSchema } from '../../lib/api-schemas';

export const get: APIRoute = async ({ url }) => {
	const name = url.searchParams.get('name');
	if (!name) {
		return new Response(null, {
			status: 400,
			statusText: 'Name not provided',
		});
	}

	const taskList = await getTaskListForUserByName(name);
	const parsedTaskList = taskListSchema.safeParse(taskList);
	if (!parsedTaskList.success) {
		return new Response(null, {
			status: 400,
			statusText: 'Requested user does not exist',
		});
	}

	return new Response(JSON.stringify(parsedTaskList.data), {
		status: 200,
	});
};

const taskInputSchema = z.object({
	userId: z.string(),
	title: z.string(),
});
export type TaskInput = z.infer<typeof taskInputSchema>;
export const post: APIRoute = async ({ request, redirect }) => {
	const data = await request.text();

	const params = Object.fromEntries([...new URLSearchParams(data).entries()]);
	const parseResult = taskInputSchema.safeParse(params);

	if (!parseResult.success) {
		return new Response(JSON.stringify({ status: 400 }));
	}

	const result = await client.task.create({
		data: {
			userId: parseResult.data.userId,
			title: parseResult.data.title,
			description: parseResult.data.title,
		},
	});

	return redirect('/', 302);
};
