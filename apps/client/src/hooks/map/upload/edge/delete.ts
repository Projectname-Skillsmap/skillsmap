import { gql, useMutation } from '@apollo/client';
import { Edge } from '@skillsmap/shared/types';

const useDeleteEdge = () => {
  const [deleteEdge] = useMutation(gql`
    mutation Mutation($edge: Edge!) {
      deleteEdge(edge: $edge) {
        from
        to
      }
    }
  `);
  return async (edgeID: string) => {
    const [source, target] = edgeID.split('-') as [string, string];
    try {
      await deleteEdge({
        variables: {
          edge: {
            from: source,
            to: target,
          } as Edge,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default useDeleteEdge;
