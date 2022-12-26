import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		tasks: z
			.lazy(() => TaskOrderByRelationAggregateInputObjectSchema)
			.optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
