import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TaskRelationFilterObjectSchema } from './TaskRelationFilter.schema';
import { TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SubtaskWhereInputObjectSchema),
				z.lazy(() => SubtaskWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => SubtaskWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SubtaskWhereInputObjectSchema),
				z.lazy(() => SubtaskWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		text: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		parentId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		parent: z
			.union([
				z.lazy(() => TaskRelationFilterObjectSchema),
				z.lazy(() => TaskWhereInputObjectSchema),
			])
			.optional(),
		completed: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		completedAt: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
	})
	.strict();

export const SubtaskWhereInputObjectSchema = Schema;
