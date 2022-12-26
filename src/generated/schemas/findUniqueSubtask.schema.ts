import { z } from 'zod';
import { SubtaskWhereUniqueInputObjectSchema } from './objects/SubtaskWhereUniqueInput.schema';

export const SubtaskFindUniqueSchema = z.object({
	where: SubtaskWhereUniqueInputObjectSchema,
});
