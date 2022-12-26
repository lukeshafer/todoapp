import { z } from 'zod';
import { UserCreateNestedOneWithoutTasksInputObjectSchema } from './UserCreateNestedOneWithoutTasksInput.schema';
import { SubtaskCreateNestedManyWithoutParentInputObjectSchema } from './SubtaskCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateInput> = z
	.object({
		id: z.string().optional(),
		title: z.string(),
		user: z.lazy(() => UserCreateNestedOneWithoutTasksInputObjectSchema),
		subtasks: z
			.lazy(() => SubtaskCreateNestedManyWithoutParentInputObjectSchema)
			.optional(),
		description: z.string(),
		completed: z.boolean().optional(),
		dueAt: z.date().optional().nullable(),
		completedAt: z.date().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const TaskCreateInputObjectSchema = Schema;
