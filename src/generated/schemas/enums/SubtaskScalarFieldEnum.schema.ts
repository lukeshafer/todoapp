import { z } from 'zod';

export const SubtaskScalarFieldEnumSchema = z.enum([
	'id',
	'text',
	'parentId',
	'completed',
	'completedAt',
	'createdAt',
	'updatedAt',
]);
