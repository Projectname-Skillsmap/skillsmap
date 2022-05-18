import { Edge } from 'react-flow-renderer';
import { useAppDispatch } from 'src/redux/redux-hooks';
import { createConnection } from 'src/components/Card/card-slice';
import { recordChange } from 'src/changes/changes';

export const useCreateConnection = () => {
  const dispatch = useAppDispatch();
  return (
    source: string,
    sourceID: string,
    target: string,
    targetID: string
  ) => {
    const newEdge = {
      id: `${source}-${target}`,
      sourceHandle: sourceID,
      targetHandle: targetID,
      source,
      target,
      type: 'ButtonEdge',
      markerEnd: { type: 'arrowclosed' },
    } as Edge;

    console.log(newEdge);
    dispatch(createConnection(newEdge));
    dispatch(
      recordChange({
        id: newEdge.id,
        type: 'ADD',
        entity: 'EDGE',
      })
    );
  };
};
