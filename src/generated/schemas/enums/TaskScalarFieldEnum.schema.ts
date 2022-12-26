import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum([
	'id',
	'title',
	'userId',
	'description',
	'completed',
	'dueAt',
	'completedAt',
	'createdAt',
	'updatedAt',
]);
