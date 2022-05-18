import { gql, useMutation } from "@apollo/client";

const useDeleteNode = () => {
  const [deleteNode] = useMutation(gql`
    mutation DeleteNode($nodeId: String!) {
      deleteNode(nodeID: $nodeId)
    }
  `);
  return async (nodeID: string) => {
    try {
      await deleteNode({
        variables: {
          nodeId: nodeID,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default useDeleteNode;
