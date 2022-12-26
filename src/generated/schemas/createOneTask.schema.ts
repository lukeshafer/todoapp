import { z } from 'zod';
import { TaskCreateInputObjectSchema } from './objects/TaskCreateInput.schema';

export const TaskCreateOneSchema = z.object({
	data: TaskCreateInputObjectSchema,
});
