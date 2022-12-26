import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutSubtasksInputObjectSchema } from './TaskCreateWithoutSubtasksInput.schema';
import { TaskUncheckedCreateWithoutSubtasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubtasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateOrConnectWithoutSubtasksInput> = z
	.object({
		where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => TaskCreateWithoutSubtasksInputObjectSchema),
			z.lazy(() => TaskUncheckedCreateWithoutSubtasksInputObjectSchema),
		]),
	})
	.strict();

export const TaskCreateOrConnectWithoutSubtasksInputObjectSchema = Schema;
