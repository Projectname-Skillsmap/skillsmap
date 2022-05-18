import { gql, useMutation } from '@apollo/client';
import { UserNode } from '@skillsmap/utils/lib/types';
import { useRouter } from 'next/router';
import { useReactFlow } from 'react-flow-renderer';
const useAddNode = () => {
  const ReactFlowInstance = useReactFlow();
  const level = useRouter().query.level;
  const [createNode] = useMutation(gql`
    mutation Mutation($node: UserNode!) {
      createNode(node: $node) {
        id
        title
        description
        level
        progress
        uploadDate
      }
    }
  `);

  return async (nodeID: string) => {
    try {
      const card = ReactFlowInstance.getNode(nodeID);
      await createNode({
        variables: {
          node: {
            description: card?.data.description,
            id: nodeID,
            level,
            title: card?.data.title,
            progress: 0,
          } as UserNode,
        },
      });
    } catch (err: any) {
      console.error(err);
    }
  };
};

export default useAddNode;
