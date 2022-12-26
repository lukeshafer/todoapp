import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskCountOrderByAggregateInputObjectSchema } from './TaskCountOrderByAggregateInput.schema';
import { TaskMaxOrderByAggregateInputObjectSchema } from './TaskMaxOrderByAggregateInput.schema';
import { TaskMinOrderByAggregateInputObjectSchema } from './TaskMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		completed: z.lazy(() => SortOrderSchema).optional(),
		dueAt: z.lazy(() => SortOrderSchema).optional(),
		completedAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => TaskCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => TaskMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => TaskMinOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const TaskOrderByWithAggregationInputObjectSchema = Schema;
