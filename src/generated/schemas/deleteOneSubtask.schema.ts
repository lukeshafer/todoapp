import { z } from 'zod';
import { SubtaskWhereUniqueInputObjectSchema } from './objects/SubtaskWhereUniqueInput.schema';

export const SubtaskDeleteOneSchema = z.object({
	where: SubtaskWhereUniqueInputObjectSchema,
});
