import { FC, useEffect, useRef } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  NodeTypes,
  ConnectionMode,
  Node,
  Edge,
  ConnectionLineType,
  EdgeTypes,
} from "react-flow-renderer";
import CustomCard from "../Card/Card";
import { useAppSelector } from "@redux/redux-hooks";
import { useLevelUpdatedNodesState } from "@hooks/map/level/useLevelNodes";
import { useLevelUpdatedEdgesState } from "@hooks/map/level/useLevelEdges";
import {
  sourceHandlerPosition$,
  targetHandlerPosition$,
} from "../Card/Handler/handlers-position";
import CustomEdge from "../Edge/Edge";
import { useNewNode } from "@hooks/map/nodes/useCreateNode";

const nodeTypes: NodeTypes = {
  Card: CustomCard,
};

const edgeTypes: EdgeTypes = {
  ButtonEdge: CustomEdge,
};

const OverviewFlow: FC<{ initialNodes: Node[]; initialEdges: Edge[] }> = ({
  initialNodes,
  initialEdges,
}) => {
  const [nodes, setNodes, onNodesChange] =
    useLevelUpdatedNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useLevelUpdatedEdgesState(initialEdges);
  const mapRef = useRef<HTMLDivElement>(null);

  const newNode = useNewNode();
  useEffect(() => {
    if (newNode.id) setNodes((nodes) => [...nodes, newNode]);
  }, [newNode, setNodes]);

  const newEdge = useAppSelector(({ card }) => card.edge);
  useEffect(() => {
    setEdges((edges) => addEdge(newEdge, edges));
  }, [newEdge, setEdges]);

  return (
    <ReactFlow
      connectionMode={"loose" as ConnectionMode}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onConnectStart={(e) => {
        sourceHandlerPosition$.next({
          x: e.pageX - mapRef.current?.getBoundingClientRect().x,
          y: e.pageY - mapRef.current?.getBoundingClientRect().y,
        });
      }}
      // onConnect={onConnect}
      onEdgesChange={(e) => {
        console.log("CHANGES TO BE APPLIED: ", e);
        onEdgesChange(e);
      }}
      onEdgesDelete={(e) => {
        console.log("EDGE TO DELETE:", e);
      }}
      ref={mapRef}
      onConnectEnd={(e) => {
        targetHandlerPosition$.next({
          x: e.pageX - mapRef.current?.getBoundingClientRect().x,
          y: e.pageY - mapRef.current?.getBoundingClientRect().y,
        });
      }}
      fitView
      nodeTypes={nodeTypes}
      connectionLineType={ConnectionLineType.SimpleBezier}
      attributionPosition='top-right'
      edgeTypes={edgeTypes}>
      <Controls />
      <Background
        style={{
          backgroundColor: "#414565",
        }}
        color='white'
        gap={16}
      />
    </ReactFlow>
  );
};

export default OverviewFlow;
