import { z } from 'zod';
import { TaskCreateNestedOneWithoutSubtasksInputObjectSchema } from './TaskCreateNestedOneWithoutSubtasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskCreateInput> = z
	.object({
		id: z.string().optional(),
		text: z.string(),
		parent: z.lazy(() => TaskCreateNestedOneWithoutSubtasksInputObjectSchema),
		completed: z.boolean().optional(),
		completedAt: z.date().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const SubtaskCreateInputObjectSchema = Schema;
