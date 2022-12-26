import { z } from 'zod';
import { SubtaskCreateWithoutParentInputObjectSchema } from './SubtaskCreateWithoutParentInput.schema';
import { SubtaskUncheckedCreateWithoutParentInputObjectSchema } from './SubtaskUncheckedCreateWithoutParentInput.schema';
import { SubtaskCreateOrConnectWithoutParentInputObjectSchema } from './SubtaskCreateOrConnectWithoutParentInput.schema';
import { SubtaskWhereUniqueInputObjectSchema } from './SubtaskWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskUncheckedCreateNestedManyWithoutParentInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SubtaskCreateWithoutParentInputObjectSchema),
					z.lazy(() => SubtaskCreateWithoutParentInputObjectSchema).array(),
					z.lazy(() => SubtaskUncheckedCreateWithoutParentInputObjectSchema),
					z
						.lazy(() => SubtaskUncheckedCreateWithoutParentInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SubtaskCreateOrConnectWithoutParentInputObjectSchema),
					z
						.lazy(() => SubtaskCreateOrConnectWithoutParentInputObjectSchema)
						.array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
					z.lazy(() => SubtaskWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();

export const SubtaskUncheckedCreateNestedManyWithoutParentInputObjectSchema =
	Schema;
