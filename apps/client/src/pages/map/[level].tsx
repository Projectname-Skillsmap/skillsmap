import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import React, { FC, useEffect } from 'react';
import { Edge, Node } from 'react-flow-renderer';
import { prisma } from 'src/prisma/prisma';
import Toolbar from 'src/components/Toolbar/Toolbar';
import styles from 'src/styles/Home.module.css';
const MAP = dynamic(() => import('src/components/Map/Map'), {
  ssr: false,
});

import { useAppDispatch } from 'src/redux/redux-hooks';
import { HandlerStack, rebuildHandlers } from 'src/components/Card/card-slice';
import Widgets from 'src/widgets/Widgets';
import UploadButton from 'src/components/UploadButton/UploadButton';

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
      <MAP initialEdges={edges} initialNodes={nodes} />
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
  const nodes = JSON.parse(graph?.nodes || ('[]' as string));
  const edges = JSON.parse(graph?.edges || ('[]' as string));
  const handlers = JSON.parse(graph?.handlers || ('{}' as string));
  return {
    props: {
      edges,
      nodes,
      handlers,
    },
  };
};

export default Maps;
