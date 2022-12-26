import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskMinAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		text: z.literal(true).optional(),
		parentId: z.literal(true).optional(),
		completed: z.literal(true).optional(),
		completedAt: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
	})
	.strict();

export const SubtaskMinAggregateInputObjectSchema = Schema;
