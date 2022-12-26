import { z } from 'zod';
import { SubtaskWhereInputObjectSchema } from './objects/SubtaskWhereInput.schema';
import { SubtaskOrderByWithRelationInputObjectSchema } from './objects/SubtaskOrderByWithRelationInput.schema';
import { SubtaskWhereUniqueInputObjectSchema } from './objects/SubtaskWhereUniqueInput.schema';
import { SubtaskCountAggregateInputObjectSchema } from './objects/SubtaskCountAggregateInput.schema';
import { SubtaskMinAggregateInputObjectSchema } from './objects/SubtaskMinAggregateInput.schema';
import { SubtaskMaxAggregateInputObjectSchema } from './objects/SubtaskMaxAggregateInput.schema';

export const SubtaskAggregateSchema = z.object({
	where: SubtaskWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			SubtaskOrderByWithRelationInputObjectSchema,
			SubtaskOrderByWithRelationInputObjectSchema.array(),
		])
		.optional(),
	cursor: SubtaskWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), SubtaskCountAggregateInputObjectSchema])
		.optional(),
	_min: SubtaskMinAggregateInputObjectSchema.optional(),
	_max: SubtaskMaxAggregateInputObjectSchema.optional(),
});
