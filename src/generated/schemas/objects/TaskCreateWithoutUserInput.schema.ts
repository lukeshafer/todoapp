import { z } from 'zod';
import { SubtaskCreateNestedManyWithoutParentInputObjectSchema } from './SubtaskCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateWithoutUserInput> = z
	.object({
		id: z.string().optional(),
		title: z.string(),
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

export const TaskCreateWithoutUserInputObjectSchema = Schema;
