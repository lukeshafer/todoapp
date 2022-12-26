import { z } from 'zod';
import { TaskCreateNestedManyWithoutUserInputObjectSchema } from './TaskCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		tasks: z
			.lazy(() => TaskCreateNestedManyWithoutUserInputObjectSchema)
			.optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const UserCreateInputObjectSchema = Schema;
