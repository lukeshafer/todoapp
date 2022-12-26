import { z } from 'zod';
import { TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskOrderByWithRelationInputObjectSchema } from './objects/TaskOrderByWithRelationInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskScalarFieldEnumSchema } from './enums/TaskScalarFieldEnum.schema';

export const TaskFindManySchema = z.object({
	where: TaskWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			TaskOrderByWithRelationInputObjectSchema,
			TaskOrderByWithRelationInputObjectSchema.array(),
		])
		.optional(),
	cursor: TaskWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(TaskScalarFieldEnumSchema).optional(),
});
