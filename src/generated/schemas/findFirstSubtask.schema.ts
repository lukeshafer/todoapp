import { z } from 'zod';
import { SubtaskWhereInputObjectSchema } from './objects/SubtaskWhereInput.schema';
import { SubtaskOrderByWithRelationInputObjectSchema } from './objects/SubtaskOrderByWithRelationInput.schema';
import { SubtaskWhereUniqueInputObjectSchema } from './objects/SubtaskWhereUniqueInput.schema';
import { SubtaskScalarFieldEnumSchema } from './enums/SubtaskScalarFieldEnum.schema';

export const SubtaskFindFirstSchema = z.object({
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
	distinct: z.array(SubtaskScalarFieldEnumSchema).optional(),
});
