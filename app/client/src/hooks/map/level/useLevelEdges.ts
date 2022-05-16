import { useEffect } from "react";
import { Edge, useEdgesState } from "react-flow-renderer";

export const useLevelUpdatedEdgesState = (initialEdgesOnLevel: Edge[]) => {
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdgesOnLevel);

  useEffect(() => {
    setEdges(initialEdgesOnLevel);
  }, [initialEdgesOnLevel, setEdges]);

  return [edges, setEdges, onEdgesChange] as const;
};
