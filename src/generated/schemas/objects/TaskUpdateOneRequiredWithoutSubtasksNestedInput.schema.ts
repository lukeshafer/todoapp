import { z } from 'zod';
import { TaskCreateWithoutSubtasksInputObjectSchema } from './TaskCreateWithoutSubtasksInput.schema';
import { TaskUncheckedCreateWithoutSubtasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubtasksInput.schema';
import { TaskCreateOrConnectWithoutSubtasksInputObjectSchema } from './TaskCreateOrConnectWithoutSubtasksInput.schema';
import { TaskUpsertWithoutSubtasksInputObjectSchema } from './TaskUpsertWithoutSubtasksInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutSubtasksInputObjectSchema } from './TaskUpdateWithoutSubtasksInput.schema';
import { TaskUncheckedUpdateWithoutSubtasksInputObjectSchema } from './TaskUncheckedUpdateWithoutSubtasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutSubtasksNestedInput> =
	z
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
			upsert: z
				.lazy(() => TaskUpsertWithoutSubtasksInputObjectSchema)
				.optional(),
			connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => TaskUpdateWithoutSubtasksInputObjectSchema),
					z.lazy(() => TaskUncheckedUpdateWithoutSubtasksInputObjectSchema),
				])
				.optional(),
		})
		.strict();

export const TaskUpdateOneRequiredWithoutSubtasksNestedInputObjectSchema =
	Schema;
