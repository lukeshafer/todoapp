import { z } from 'zod';
import { SubtaskWhereUniqueInputObjectSchema } from './SubtaskWhereUniqueInput.schema';
import { SubtaskUpdateWithoutParentInputObjectSchema } from './SubtaskUpdateWithoutParentInput.schema';
import { SubtaskUncheckedUpdateWithoutParentInputObjectSchema } from './SubtaskUncheckedUpdateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskUpdateWithWhereUniqueWithoutParentInput> =
	z
		.object({
			where: z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => SubtaskUpdateWithoutParentInputObjectSchema),
				z.lazy(() => SubtaskUncheckedUpdateWithoutParentInputObjectSchema),
			]),
		})
		.strict();

export const SubtaskUpdateWithWhereUniqueWithoutParentInputObjectSchema =
	Schema;
