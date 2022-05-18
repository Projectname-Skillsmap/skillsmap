import {
  Node,
  useReactFlow,
  useUpdateNodeInternals,
} from 'react-flow-renderer';
import { useAppDispatch } from '@redux/redux-hooks';
import { CardPayload } from '@utils/card';
import { updateHandlers } from '@components/Card/card-slice';
import { getCardMetrics, snapEdge } from '@components/Card/Handler/snap-edge';

export const useUpdateHandlers = () => {
  const ReactFlowInstance = useReactFlow();
  const dispatch = useAppDispatch();
  const updateNodeInternals = useUpdateNodeInternals();
  return (
    id: string,
    position: { x: number; y: number },
    type: 'target' | 'source'
  ) => {
    const card = ReactFlowInstance.getNode(id) as Node<CardPayload>;
    /**
     * The cursor position inside the canvas
     */
    const cursorPosition = ReactFlowInstance.project(position);

    /**
     * The card's metrics necessary for placing the handler on one edge
     */
    const metrics = getCardMetrics(card);

    // the x and y position for snapping the handler to the closest edge
    const { x: handlerX, y: handlerY } = snapEdge(metrics, cursorPosition);

    // adding multiple edges on the same node requires a targetHandle,
    // that connect a handler to an edge. The targetHandle should be unique
    // and known by both the handler and the edge.
    const targetID = (Math.random() + 1).toString(36).substring(7);

    // update the node's handlers and connections
    dispatch(
      updateHandlers({
        handler: {
          handlerX,
          handlerY,
          id,
          type,
          targetID,
        },
      })
    );
    updateNodeInternals(card.id);

    return targetID;
  };
};
