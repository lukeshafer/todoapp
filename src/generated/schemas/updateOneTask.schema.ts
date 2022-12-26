import { z } from 'zod';
import { TaskUpdateInputObjectSchema } from './objects/TaskUpdateInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';

export const TaskUpdateOneSchema = z.object({
	data: TaskUpdateInputObjectSchema,
	where: TaskWhereUniqueInputObjectSchema,
});
