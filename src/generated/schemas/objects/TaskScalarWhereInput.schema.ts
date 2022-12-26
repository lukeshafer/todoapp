import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => TaskScalarWhereInputObjectSchema),
				z.lazy(() => TaskScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => TaskScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => TaskScalarWhereInputObjectSchema),
				z.lazy(() => TaskScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		title: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		userId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		description: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		completed: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		dueAt: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
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

export const TaskScalarWhereInputObjectSchema = Schema;
