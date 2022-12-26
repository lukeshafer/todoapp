import { z } from 'zod';
import { SubtaskWhereUniqueInputObjectSchema } from './SubtaskWhereUniqueInput.schema';
import { SubtaskUpdateWithoutParentInputObjectSchema } from './SubtaskUpdateWithoutParentInput.schema';
import { SubtaskUncheckedUpdateWithoutParentInputObjectSchema } from './SubtaskUncheckedUpdateWithoutParentInput.schema';
import { SubtaskCreateWithoutParentInputObjectSchema } from './SubtaskCreateWithoutParentInput.schema';
import { SubtaskUncheckedCreateWithoutParentInputObjectSchema } from './SubtaskUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskUpsertWithWhereUniqueWithoutParentInput> =
	z
		.object({
			where: z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => SubtaskUpdateWithoutParentInputObjectSchema),
				z.lazy(() => SubtaskUncheckedUpdateWithoutParentInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => SubtaskCreateWithoutParentInputObjectSchema),
				z.lazy(() => SubtaskUncheckedCreateWithoutParentInputObjectSchema),
			]),
		})
		.strict();

export const SubtaskUpsertWithWhereUniqueWithoutParentInputObjectSchema =
	Schema;
