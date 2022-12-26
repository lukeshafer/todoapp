import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SubtaskCountOrderByAggregateInputObjectSchema } from './SubtaskCountOrderByAggregateInput.schema';
import { SubtaskMaxOrderByAggregateInputObjectSchema } from './SubtaskMaxOrderByAggregateInput.schema';
import { SubtaskMinOrderByAggregateInputObjectSchema } from './SubtaskMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		parentId: z.lazy(() => SortOrderSchema).optional(),
		completed: z.lazy(() => SortOrderSchema).optional(),
		completedAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => SubtaskCountOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z.lazy(() => SubtaskMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => SubtaskMinOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const SubtaskOrderByWithAggregationInputObjectSchema = Schema;
