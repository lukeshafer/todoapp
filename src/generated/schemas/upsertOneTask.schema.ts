import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskCreateInputObjectSchema } from './objects/TaskCreateInput.schema';
import { TaskUpdateInputObjectSchema } from './objects/TaskUpdateInput.schema';

export const TaskUpsertSchema = z.object({
	where: TaskWhereUniqueInputObjectSchema,
	create: TaskCreateInputObjectSchema,
	update: TaskUpdateInputObjectSchema,
});
