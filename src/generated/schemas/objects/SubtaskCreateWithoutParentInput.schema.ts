import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskCreateWithoutParentInput> = z
	.object({
		id: z.string().optional(),
		text: z.string(),
		completed: z.boolean().optional(),
		completedAt: z.date().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const SubtaskCreateWithoutParentInputObjectSchema = Schema;
