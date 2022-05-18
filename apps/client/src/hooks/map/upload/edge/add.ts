import { gql, useMutation } from '@apollo/client';
import { Edge } from '@skillsmap/utils/lib/types';
import { useReactFlow } from 'react-flow-renderer';

const useAddEdge = () => {
  const ReactFlowInstance = useReactFlow();
  const [createEdge] = useMutation(gql`
    mutation Mutation($edge: Edge!) {
      createEdge(edge: $edge)
    }
  `);
  return async (edgeID: string) => {
    const edge = ReactFlowInstance.getEdge(edgeID);
    try {
      await createEdge({
        variables: {
          edge: {
            from: edge?.source,
            to: edge?.target,
          } as Edge,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default useAddEdge;
