import type { APIRoute } from 'astro';
import { client, getTaskListForUserByName } from '../../db';
import { taskInputSchema, taskListSchema } from '../../lib/api-schemas';

export const get: APIRoute = async ({ url }) => {
	try {
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
	} catch {
		console.error('get tasks');
		return new Response(null, {
			status: 500,
			statusText: 'Uh oh!',
		});
	}
};

export const post: APIRoute = async ({ request }) => {
	try {
		const data = await request.text();

		const params = Object.fromEntries([
			...new URLSearchParams(data).entries(),
		]);
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

		return new Response(result.id);
	} catch {
		console.error('post task');
		return new Response(null, {
			status: 500,
			statusText: 'Uh oh!',
		});
	}
};
