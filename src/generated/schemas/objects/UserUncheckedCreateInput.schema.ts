import { z } from 'zod';
import { TaskUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		tasks: z
			.lazy(() => TaskUncheckedCreateNestedManyWithoutUserInputObjectSchema)
			.optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
