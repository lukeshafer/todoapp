import { z } from 'zod';
import { SubtaskWhereUniqueInputObjectSchema } from './SubtaskWhereUniqueInput.schema';
import { SubtaskCreateWithoutParentInputObjectSchema } from './SubtaskCreateWithoutParentInput.schema';
import { SubtaskUncheckedCreateWithoutParentInputObjectSchema } from './SubtaskUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskCreateOrConnectWithoutParentInput> = z
	.object({
		where: z.lazy(() => SubtaskWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => SubtaskCreateWithoutParentInputObjectSchema),
			z.lazy(() => SubtaskUncheckedCreateWithoutParentInputObjectSchema),
		]),
	})
	.strict();

export const SubtaskCreateOrConnectWithoutParentInputObjectSchema = Schema;
