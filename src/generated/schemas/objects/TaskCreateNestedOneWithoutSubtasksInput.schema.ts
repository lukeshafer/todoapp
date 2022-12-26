import { z } from 'zod';
import { TaskCreateWithoutSubtasksInputObjectSchema } from './TaskCreateWithoutSubtasksInput.schema';
import { TaskUncheckedCreateWithoutSubtasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubtasksInput.schema';
import { TaskCreateOrConnectWithoutSubtasksInputObjectSchema } from './TaskCreateOrConnectWithoutSubtasksInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateNestedOneWithoutSubtasksInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => TaskCreateWithoutSubtasksInputObjectSchema),
				z.lazy(() => TaskUncheckedCreateWithoutSubtasksInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => TaskCreateOrConnectWithoutSubtasksInputObjectSchema)
			.optional(),
		connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const TaskCreateNestedOneWithoutSubtasksInputObjectSchema = Schema;
