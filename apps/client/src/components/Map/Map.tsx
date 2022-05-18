import { FC, ReactNode, useEffect, useRef } from 'react';
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
} from 'react-flow-renderer';
import CustomCard from '../Card/Card';
import { useAppSelector } from 'src/redux/redux-hooks';
import { useLevelUpdatedNodesState } from 'src/hooks//map/level/useLevelNodes';
import { useLevelUpdatedEdgesState } from 'src/hooks//map/level/useLevelEdges';
import {
  updateSourceHandlerPosition,
  updateTargetHandlerPosition,
} from 'src/components/Card/Handler/handlers-position';
import CustomEdge from '../Edge/Edge';
import { useNewNode } from 'src/hooks/map/nodes/useCreateNode';

const nodeTypes: NodeTypes = {
  Card: CustomCard as unknown as ReactNode,
};

const edgeTypes: EdgeTypes = {
  ButtonEdge: CustomEdge as unknown as ReactNode,
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
      connectionMode={'loose' as ConnectionMode}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnectStart={(e) => {
        const x = e.clientX - mapRef!.current!.getBoundingClientRect().x;
        const y = e.clientY - mapRef!.current!.getBoundingClientRect().y;
        console.log({ x, y });
        updateSourceHandlerPosition({ x, y });
      }}
      ref={mapRef}
      onConnectEnd={(e) => {
        const x = e.clientX - mapRef!.current!.getBoundingClientRect().x;
        const y = e.clientY - mapRef!.current!.getBoundingClientRect().y;
        updateTargetHandlerPosition({ x, y });
      }}
      fitView
      nodeTypes={nodeTypes}
      connectionLineType={ConnectionLineType.SimpleBezier}
      attributionPosition="top-right"
      edgeTypes={edgeTypes}
    >
      <Controls />
      <Background
        style={{
          backgroundColor: '#414565',
        }}
        color="white"
        gap={16}
      />
    </ReactFlow>
  );
};

export default OverviewFlow;
