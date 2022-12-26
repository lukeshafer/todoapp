import { z } from 'zod';

const dateOrStringDate = z.preprocess((arg) => {
	if (typeof arg === 'string') return new Date(arg);
	return arg;
}, z.date());

export const taskListSchema = z.array(
	z.object({
		id: z.string(),
		title: z.string(),
		completed: z.boolean(),
		description: z.string().nullable(),
		dueAt: dateOrStringDate.nullable(),
		completedAt: dateOrStringDate.nullable(),
		subtasks: z.array(
			z.object({
				text: z.string(),
				completed: z.boolean(),
				completedAt: z.date().nullable(),
			})
		),
	})
);
