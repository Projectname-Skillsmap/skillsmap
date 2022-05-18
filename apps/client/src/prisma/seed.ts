import { prisma } from './prisma';

export default async function seed() {
  await prisma.graph.deleteMany({});
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
