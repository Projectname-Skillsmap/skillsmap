import { prisma } from "./prisma";
import { Edge, Node } from "react-flow-renderer";
import type { CardPayload } from "../src/utils/card-helpers";

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