import { useReactFlow } from 'react-flow-renderer';
import { startAnimation$ } from '@components/Curtain/Curtain';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import animate from '@src/animations/animate';

const useAnimate = (id: string | undefined = undefined) => {
  const ReactFlowInstance = useReactFlow();
  const router = useRouter();
  const node = id ? ReactFlowInstance.getNode(id) : null;

  const zoomIn = useMemo(
    () =>
      node
        ? {
            animate: () =>
              ReactFlowInstance.setCenter(
                node.positionAbsolute!.x + node.width! / 2,
                node.positionAbsolute!.y + node.height! / 2,
                {
                  duration: 800,
                  zoom: 2,
                }
              ),
            duration: 800,
          }
        : null,
    [node, ReactFlowInstance]
  );

  return () => {
    setTimeout(() => {
      router.push(`/map/${id}`);
    }, 1500);

    animate(zoomIn, {
      animate: () => startAnimation$.next(1000),
      duration: 1000,
    });
  };
};

export default useAnimate;
