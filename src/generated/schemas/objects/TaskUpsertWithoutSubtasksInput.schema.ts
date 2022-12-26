import { z } from 'zod';
import { TaskUpdateWithoutSubtasksInputObjectSchema } from './TaskUpdateWithoutSubtasksInput.schema';
import { TaskUncheckedUpdateWithoutSubtasksInputObjectSchema } from './TaskUncheckedUpdateWithoutSubtasksInput.schema';
import { TaskCreateWithoutSubtasksInputObjectSchema } from './TaskCreateWithoutSubtasksInput.schema';
import { TaskUncheckedCreateWithoutSubtasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubtasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpsertWithoutSubtasksInput> = z
	.object({
		update: z.union([
			z.lazy(() => TaskUpdateWithoutSubtasksInputObjectSchema),
			z.lazy(() => TaskUncheckedUpdateWithoutSubtasksInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => TaskCreateWithoutSubtasksInputObjectSchema),
			z.lazy(() => TaskUncheckedCreateWithoutSubtasksInputObjectSchema),
		]),
	})
	.strict();

export const TaskUpsertWithoutSubtasksInputObjectSchema = Schema;
