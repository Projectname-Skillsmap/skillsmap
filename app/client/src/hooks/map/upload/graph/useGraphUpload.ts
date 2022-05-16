import { deleteChangesHistory } from "@changes/changes";
import useChanges from "@hooks/changes/useChanges";
import { useAppDispatch } from "@redux/redux-hooks";
import useAddEdge from "../edge/add";
import useAddNode from "../node/add";
import useDeleteNode from "../node/delete";

const useGraphUpload = () => {
  const dispatch = useAppDispatch();

  const changes = useChanges();

  const addNode = useAddNode();
  const addEdge = useAddEdge();
  const deleteNode = useDeleteNode();

  return async () => {
    for await (const change of changes) {
      if (change.entity === "NODE" && change.type === "ADD") {
        addNode(change.id);
      }

      if (change.entity === "EDGE" && change.type === "ADD") {
        addEdge(change.id);
      }

      if (change.entity === "NODE" && change.type === "DELETE") {
        deleteNode(change.id);
      }
    }
    dispatch(deleteChangesHistory());
  };
};

export default useGraphUpload;
