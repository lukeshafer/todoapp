import { z } from 'zod';
import { SubtaskUpdateInputObjectSchema } from './objects/SubtaskUpdateInput.schema';
import { SubtaskWhereUniqueInputObjectSchema } from './objects/SubtaskWhereUniqueInput.schema';

export const SubtaskUpdateOneSchema = z.object({
	data: SubtaskUpdateInputObjectSchema,
	where: SubtaskWhereUniqueInputObjectSchema,
});
