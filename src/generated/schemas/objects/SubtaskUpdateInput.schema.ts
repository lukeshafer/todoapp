import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutSubtasksNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutSubtasksNestedInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubtaskUpdateInput> = z
	.object({
		id: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		text: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		parent: z
			.lazy(() => TaskUpdateOneRequiredWithoutSubtasksNestedInputObjectSchema)
			.optional(),
		completed: z
			.union([
				z.boolean(),
				z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		completedAt: z
			.union([
				z.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		createdAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		updatedAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const SubtaskUpdateInputObjectSchema = Schema;
