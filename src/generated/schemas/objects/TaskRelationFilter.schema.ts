import { z } from 'zod';
import { TaskWhereInputObjectSchema } from './TaskWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskRelationFilter> = z
	.object({
		is: z.lazy(() => TaskWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => TaskWhereInputObjectSchema).optional(),
	})
	.strict();

export const TaskRelationFilterObjectSchema = Schema;
