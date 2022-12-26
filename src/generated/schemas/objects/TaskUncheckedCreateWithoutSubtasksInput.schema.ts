import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateWithoutSubtasksInput> = z
	.object({
		id: z.string().optional(),
		title: z.string(),
		userId: z.string(),
		description: z.string(),
		completed: z.boolean().optional(),
		dueAt: z.date().optional().nullable(),
		completedAt: z.date().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const TaskUncheckedCreateWithoutSubtasksInputObjectSchema = Schema;
