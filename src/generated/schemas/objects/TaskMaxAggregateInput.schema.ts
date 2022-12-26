import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		title: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		description: z.literal(true).optional(),
		completed: z.literal(true).optional(),
		dueAt: z.literal(true).optional(),
		completedAt: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
	})
	.strict();

export const TaskMaxAggregateInputObjectSchema = Schema;
