import { z } from 'zod';
import { SubtaskUpdateManyMutationInputObjectSchema } from './objects/SubtaskUpdateManyMutationInput.schema';
import { SubtaskWhereInputObjectSchema } from './objects/SubtaskWhereInput.schema';

export const SubtaskUpdateManySchema = z.object({
	data: SubtaskUpdateManyMutationInputObjectSchema,
	where: SubtaskWhereInputObjectSchema.optional(),
});
