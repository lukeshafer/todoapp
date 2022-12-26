import { z } from 'zod';
import { SubtaskScalarWhereInputObjectSchema } from './SubtaskScalarWhereInput.schema';
import { SubtaskUpdateManyMutationInputObjectSchema } from './SubtaskUpdateManyMutationInput.schema';
import { SubtaskUncheckedUpdateManyWithoutSubtasksInputObjectSchema } from './SubtaskUncheckedUpdateManyWithoutSubtasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskUpdateManyWithWhereWithoutParentInput> = z
	.object({
		where: z.lazy(() => SubtaskScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => SubtaskUpdateManyMutationInputObjectSchema),
			z.lazy(() => SubtaskUncheckedUpdateManyWithoutSubtasksInputObjectSchema),
		]),
	})
	.strict();

export const SubtaskUpdateManyWithWhereWithoutParentInputObjectSchema = Schema;
