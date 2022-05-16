import { useEffect } from "react";
import { Node, useNodesState } from "react-flow-renderer";
import { CardPayload } from "src/utils/card-helpers";

export const useLevelUpdatedNodesState = (
  initialNodesOnLevel: Node<CardPayload>[]
) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodesOnLevel);
  useEffect(() => {
    setNodes(initialNodesOnLevel);
  }, [initialNodesOnLevel, setNodes]);

  return [nodes, setNodes, onNodesChange] as const;
};
