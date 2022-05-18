import { useReactFlow } from 'react-flow-renderer';
import { useRouter } from 'next/router';
import { CardPayload } from 'src/utils/card';
import { useAppSelector } from 'src/redux//redux-hooks';

const useMapUpload = () => {
  const router = useRouter();
  const ReactFlowInstance = useReactFlow<CardPayload>();
  const card = useAppSelector(({ card }) => card);

  return async () => {
    try {
      await fetch(
        `/api/${(router.query.level as string) || 'web-development'}`,
        {
          method: 'POST',
          body: JSON.stringify({
            nodes: JSON.stringify(ReactFlowInstance.getNodes()),
            edges: JSON.stringify(ReactFlowInstance.getEdges()),
            handlers: JSON.stringify(card.handlers),
          }),
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
};

export default useMapUpload;
