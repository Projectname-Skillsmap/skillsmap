import { deleteChangesHistory } from 'src/changes/changes';
import useChanges from 'src/hooks/changes/useChanges';
import { useAppDispatch } from 'src/redux/redux-hooks';
import useAddEdge from '../edge/add';
import useDeleteEdge from '../edge/delete';
import useAddNode from '../node/add';
import useDeleteNode from '../node/delete';

const useGraphUpload = () => {
  const dispatch = useAppDispatch();

  const changes = useChanges();

  const addNode = useAddNode();
  const addEdge = useAddEdge();
  const deleteNode = useDeleteNode();
  const deleteEdge = useDeleteEdge();

  return async () => {
    for await (const change of changes) {
      if (change.entity === 'NODE' && change.type === 'ADD') {
        addNode(change.id);
      }

      if (change.entity === 'EDGE' && change.type === 'ADD') {
        addEdge(change.id);
      }

      if (change.entity === 'NODE' && change.type === 'DELETE') {
        deleteNode(change.id);
      }

      if (change.entity === 'EDGE' && change.type === 'DELETE') {
        console.log('should delete ...');
        deleteEdge(change.id);
      }
    }
    dispatch(deleteChangesHistory());
  };
};

export default useGraphUpload;
