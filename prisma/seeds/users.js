// @ts-check
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
await client.user.deleteMany()

const anahita = await client.user.create({
	data: {
		name: "Anahita"
	}
})
console.log("Created user Anahita")
await client.task.create({
	data: {
		userId: anahita.id,
		title: "Be sweet!!",
		description: "okay??????",
		completed: true,
		completedAt: new Date(),
	}
})

const luke = await client.user.create({
	data: {
		name: "Luke"
	}
})
console.log("Created user Luke")
await client.task.create({
	data: {
		userId: luke.id,
		title: "Do some laundry",
		description: "You should do laundry",
		completed: false,
	}
})
