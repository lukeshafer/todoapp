import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { SubtaskOrderByRelationAggregateInputObjectSchema } from './SubtaskOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
		subtasks: z
			.lazy(() => SubtaskOrderByRelationAggregateInputObjectSchema)
			.optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		completed: z.lazy(() => SortOrderSchema).optional(),
		dueAt: z.lazy(() => SortOrderSchema).optional(),
		completedAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const TaskOrderByWithRelationInputObjectSchema = Schema;
