import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutTasksInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutTasksInputObjectSchema = Schema;
