import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskMaxOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		parentId: z.lazy(() => SortOrderSchema).optional(),
		completed: z.lazy(() => SortOrderSchema).optional(),
		completedAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const SubtaskMaxOrderByAggregateInputObjectSchema = Schema;
