import { z } from 'zod';
import { SubtaskWhereUniqueInputObjectSchema } from './objects/SubtaskWhereUniqueInput.schema';
import { SubtaskCreateInputObjectSchema } from './objects/SubtaskCreateInput.schema';
import { SubtaskUpdateInputObjectSchema } from './objects/SubtaskUpdateInput.schema';

export const SubtaskUpsertSchema = z.object({
	where: SubtaskWhereUniqueInputObjectSchema,
	create: SubtaskCreateInputObjectSchema,
	update: SubtaskUpdateInputObjectSchema,
});
