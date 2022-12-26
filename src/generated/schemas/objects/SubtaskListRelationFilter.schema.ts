import { z } from 'zod';
import { SubtaskWhereInputObjectSchema } from './SubtaskWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskListRelationFilter> = z
	.object({
		every: z.lazy(() => SubtaskWhereInputObjectSchema).optional(),
		some: z.lazy(() => SubtaskWhereInputObjectSchema).optional(),
		none: z.lazy(() => SubtaskWhereInputObjectSchema).optional(),
	})
	.strict();

export const SubtaskListRelationFilterObjectSchema = Schema;
