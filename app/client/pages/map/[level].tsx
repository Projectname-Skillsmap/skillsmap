import { NextPageContext } from "next";
import dynamic from "next/dynamic";
import React, { FC, useEffect } from "react";
import { Edge, Node } from "react-flow-renderer";
import { prisma } from "prisma/prisma";
import Toolbar from "@components/Toolbar/Toolbar";
import styles from "@styles/Home.module.css";
const Tree = dynamic(() => import("@components/Tree/Tree"), {
  ssr: false,
});

import { useAppDispatch } from "@redux/redux-hooks";
import { HandlerStack, rebuildHandlers } from "@components/Card/card-slice";
import Widgets from "@widgets/Widgets";
import UploadButton from "@components/UploadButton/UploadButton";

const Maps: FC<{ edges: Edge[]; nodes: Node[]; handlers: HandlerStack }> = ({
  nodes,
  edges,
  handlers,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(rebuildHandlers(handlers));
  }, []);

  return (
    <div className={styles.container}>
      <Toolbar></Toolbar>
      <Tree initialEdges={edges} initialNodes={nodes}></Tree>
      <Widgets />
      <UploadButton />
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { level } = context.query as { level: string };
  const graph = await prisma.graph.findFirst({
    where: {
      level,
    },
  });
  const nodes = JSON.parse(graph?.nodes || ("[]" as string));
  const edges = JSON.parse(graph?.edges || ("[]" as string));
  const handlers = JSON.parse(graph?.handlers || ("{}" as string));
  return {
    props: {
      edges,
      nodes,
      handlers,
    },
  };
};

export default Maps;
