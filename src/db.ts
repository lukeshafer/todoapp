import { PrismaClient } from '@prisma/client';

export const client = new PrismaClient();

// Date 12 hours ago
const date = new Date();
date.setHours(date.getHours() - 12);

export const getTaskListForUserByName = async (name: string) => {
	const user = await client.user.findFirst({ where: { name } });
	if (!user) return undefined;
	const result = await client.task.findMany({
		where: { userId: user.id },
		include: { subtasks: true },
	});
	const dateToCheck = new Date('2021-08-01');
	//dateToCheck.setHours(dateToCheck.getHours() - 12); // 12 hours ago
	return result.filter(
		(task) =>
			task.completed === false ||
			(task.completedAt && task.completedAt > dateToCheck)
	);
};
