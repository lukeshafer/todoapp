import { z } from 'zod';
import { SubtaskWhereInputObjectSchema } from './objects/SubtaskWhereInput.schema';
import { SubtaskOrderByWithAggregationInputObjectSchema } from './objects/SubtaskOrderByWithAggregationInput.schema';
import { SubtaskScalarWhereWithAggregatesInputObjectSchema } from './objects/SubtaskScalarWhereWithAggregatesInput.schema';
import { SubtaskScalarFieldEnumSchema } from './enums/SubtaskScalarFieldEnum.schema';

export const SubtaskGroupBySchema = z.object({
	where: SubtaskWhereInputObjectSchema.optional(),
	orderBy: z.union([
		SubtaskOrderByWithAggregationInputObjectSchema,
		SubtaskOrderByWithAggregationInputObjectSchema.array(),
	]),
	having: SubtaskScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(SubtaskScalarFieldEnumSchema),
});
