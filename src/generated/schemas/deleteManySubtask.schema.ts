import { z } from 'zod';
import { SubtaskWhereInputObjectSchema } from './objects/SubtaskWhereInput.schema';

export const SubtaskDeleteManySchema = z.object({
	where: SubtaskWhereInputObjectSchema.optional(),
});
