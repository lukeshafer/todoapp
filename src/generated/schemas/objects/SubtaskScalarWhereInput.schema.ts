import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SubtaskScalarWhereInputObjectSchema),
				z.lazy(() => SubtaskScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => SubtaskScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SubtaskScalarWhereInputObjectSchema),
				z.lazy(() => SubtaskScalarWhereInputObjectSchema).array(),
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

export const SubtaskScalarWhereInputObjectSchema = Schema;
