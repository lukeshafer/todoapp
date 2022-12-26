import { z } from 'zod';
import { SubtaskUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './SubtaskUncheckedCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateWithoutUserInput> = z
	.object({
		id: z.string().optional(),
		title: z.string(),
		subtasks: z
			.lazy(
				() => SubtaskUncheckedCreateNestedManyWithoutParentInputObjectSchema
			)
			.optional(),
		description: z.string(),
		completed: z.boolean().optional(),
		dueAt: z.date().optional().nullable(),
		completedAt: z.date().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const TaskUncheckedCreateWithoutUserInputObjectSchema = Schema;
