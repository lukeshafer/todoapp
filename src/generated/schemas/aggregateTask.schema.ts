import { z } from 'zod';
import { TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskOrderByWithRelationInputObjectSchema } from './objects/TaskOrderByWithRelationInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskCountAggregateInputObjectSchema } from './objects/TaskCountAggregateInput.schema';
import { TaskMinAggregateInputObjectSchema } from './objects/TaskMinAggregateInput.schema';
import { TaskMaxAggregateInputObjectSchema } from './objects/TaskMaxAggregateInput.schema';

export const TaskAggregateSchema = z.object({
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
	_count: z
		.union([z.literal(true), TaskCountAggregateInputObjectSchema])
		.optional(),
	_min: TaskMinAggregateInputObjectSchema.optional(),
	_max: TaskMaxAggregateInputObjectSchema.optional(),
});
