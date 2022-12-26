import { z } from 'zod';
import { SubtaskCreateWithoutParentInputObjectSchema } from './SubtaskCreateWithoutParentInput.schema';
import { SubtaskUncheckedCreateWithoutParentInputObjectSchema } from './SubtaskUncheckedCreateWithoutParentInput.schema';
import { SubtaskCreateOrConnectWithoutParentInputObjectSchema } from './SubtaskCreateOrConnectWithoutParentInput.schema';
import { SubtaskUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './SubtaskUpsertWithWhereUniqueWithoutParentInput.schema';
import { SubtaskWhereUniqueInputObjectSchema } from './SubtaskWhereUniqueInput.schema';
import { SubtaskUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './SubtaskUpdateWithWhereUniqueWithoutParentInput.schema';
import { SubtaskUpdateManyWithWhereWithoutParentInputObjectSchema } from './SubtaskUpdateManyWithWhereWithoutParentInput.schema';
import { SubtaskScalarWhereInputObjectSchema } from './SubtaskScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskUpdateManyWithoutParentNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(
					() => SubtaskUpsertWithWhereUniqueWithoutParentInputObjectSchema
				),
				z
					.lazy(
						() => SubtaskUpsertWithWhereUniqueWithoutParentInputObjectSchema
					)
					.array(),
			])
			.optional(),
		set: z
			.union([
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
				z.lazy(() => SubtaskWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		update: z
			.union([
				z.lazy(
					() => SubtaskUpdateWithWhereUniqueWithoutParentInputObjectSchema
				),
				z
					.lazy(
						() => SubtaskUpdateWithWhereUniqueWithoutParentInputObjectSchema
					)
					.array(),
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => SubtaskUpdateManyWithWhereWithoutParentInputObjectSchema),
				z
					.lazy(() => SubtaskUpdateManyWithWhereWithoutParentInputObjectSchema)
					.array(),
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => SubtaskScalarWhereInputObjectSchema),
				z.lazy(() => SubtaskScalarWhereInputObjectSchema).array(),
			])
			.optional(),
	})
	.strict();

export const SubtaskUpdateManyWithoutParentNestedInputObjectSchema = Schema;
