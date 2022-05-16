import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/prisma";
const updateGraphOnLevel = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { level } = req.query as { level: string };
  const { edges, nodes, handlers } = JSON.parse(req.body);

  try {
    await prisma.graph.upsert({
      where: {
        level,
      },
      create: {
        level,
        edges,
        nodes,
        handlers,
      },
      update: {
        edges,
        nodes,
        handlers,
      },
    });
    res.send("ok");
  } catch (err) {
    res.send(err);
  }
};

export default updateGraphOnLevel;
