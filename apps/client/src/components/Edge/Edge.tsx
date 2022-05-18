import React, { FC } from 'react';
import {
  EdgeProps,
  useReactFlow,
  getSimpleBezierEdgeCenter,
  getSimpleBezierPath,
} from 'react-flow-renderer';
import { useAppDispatch, useAppSelector } from '@redux/redux-hooks';
import { recordChange } from 'src/changes/changes';
import { deleteHandlers } from '../Card/card-slice';
import edge__styles from './edge.module.css';
const foreignObjectSize = 40;

const CustomEdge: FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const edgePath = getSimpleBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [edgeCenterX, edgeCenterY] = getSimpleBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const ReactFlowInstance = useReactFlow();
  const handlers = useAppSelector(({ card }) => card.handlers);
  const dispatch = useAppDispatch();
  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className={edge__styles.edgebuttonforeignobject}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div>
          <button
            className={edge__styles.edgebutton}
            onClick={() => {
              const edgeSourceID = ReactFlowInstance.getEdge(id)?.sourceHandle;
              const sourceStack = ReactFlowInstance.getEdge(id)?.source;
              const edgeTargetID = ReactFlowInstance.getEdge(id)?.targetHandle;
              const targetStack = ReactFlowInstance.getEdge(id)?.target;

              dispatch(
                recordChange({
                  id,
                  type: 'DELETE',
                  entity: 'EDGE',
                })
              );

              dispatch(
                deleteHandlers({
                  stack: sourceStack!,
                  id: edgeSourceID!,
                })
              );

              dispatch(
                deleteHandlers({
                  stack: targetStack!,
                  id: edgeTargetID!,
                })
              );

              ReactFlowInstance.removeEdge(id);
            }}
          >
            ×
          </button>
        </div>
      </foreignObject>
    </>
  );
};
export default CustomEdge;
