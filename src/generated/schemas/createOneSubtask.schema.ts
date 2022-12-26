import { z } from 'zod';
import { SubtaskCreateInputObjectSchema } from './objects/SubtaskCreateInput.schema';

export const SubtaskCreateOneSchema = z.object({
	data: SubtaskCreateInputObjectSchema,
});
