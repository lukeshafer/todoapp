import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		parentId: z.lazy(() => SortOrderSchema).optional(),
		parent: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
		completed: z.lazy(() => SortOrderSchema).optional(),
		completedAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const SubtaskOrderByWithRelationInputObjectSchema = Schema;
