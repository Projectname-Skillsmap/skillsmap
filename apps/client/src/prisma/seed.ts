import { prisma } from './prisma';
import { Edge, Node } from '../react-flow-renderer-v12/dist/esm';
import type { CardPayload } from '@utils/card';

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
