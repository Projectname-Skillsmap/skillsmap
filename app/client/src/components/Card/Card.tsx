import { FC, useEffect } from "react";
import {
  HandleElement,
  NodeHandleBounds,
  useReactFlow,
} from "react-flow-renderer";
import type { CardPayload } from "@utils/card-helpers";
import { useAppDispatch, useAppSelector } from "@redux/redux-hooks";
import card__style from "./card.module.css";
import { Button } from "@mui/material";
import { openModal } from "@redux/widget/modals/modals";
import Handlers from "./Handler/Handler";
import { RiDragMove2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteHandlers } from "./card-slice";
import { recordChange } from "@changes/changes";

const CustomCard: FC<{
  data: CardPayload;
  id: string;
  handleBounds: NodeHandleBounds;
}> = ({ data, id, handleBounds }) => {
  useEffect(() => {
    console.log(handleBounds);
  }, [handleBounds]);

  const ReactFlowInstance = useReactFlow();
  const changes = useAppSelector(({ changes }) => changes);
  // const animateOut = useAnimate(id);
  const dispatch = useAppDispatch();
  return (
    <div className={card__style.content__container}>
      <div className={card__style.drag_handler__container}>
        <div className={card__style.invisible__drag_handler}>
          <div
            className={card__style.drag_handler}
            onClick={() => {
              console.log({ changes });
              dispatch(
                recordChange({
                  entity: "NODE",
                  type: "DELETE",
                  id,
                })
              );

              const handlers = ReactFlowInstance.removeNode(id);

              if (!handlers) return;

              const combinedHandlers = (handlers.source || [])
                .concat(handlers.target || [])
                .map((handler) => ({
                  handler,
                  stackID: id,
                }));

              const deletedEdges = ReactFlowInstance.getEdges().filter((edge) =>
                combinedHandlers.find(
                  ({ handler }) =>
                    handler.id === edge.sourceHandle ||
                    handler.id === edge.targetHandle
                )
              );

              console.log({ deletedEdges });

              const handlersToDelete = deletedEdges.reduce((prev, curr) => {
                const handlersToAdd = prev.filter(
                  (handler) =>
                    handler.handler.id !== curr.sourceHandle &&
                    handler.handler.id !== curr.targetHandle
                );
                return [
                  ...handlersToAdd,
                  {
                    handler: {
                      id: curr.targetHandle,
                    },
                    stackID: curr.target,
                  } as {
                    handler: HandleElement;
                    stackID: string;
                  },
                  {
                    handler: {
                      id: curr.sourceHandle,
                    },
                    stackID: curr.source,
                  } as {
                    handler: HandleElement;
                    stackID: string;
                  },
                ];
              }, combinedHandlers);
              handlersToDelete.map((handler) =>
                dispatch(
                  deleteHandlers({
                    id: handler.handler.id!,
                    stack: handler.stackID,
                  })
                )
              );
              deletedEdges.map((edge) => ReactFlowInstance.removeEdge(edge.id));
              deletedEdges.map((edge) =>
                dispatch(
                  recordChange({
                    entity: "EDGE",
                    id: edge.id,
                    type: "DELETE",
                  })
                )
              );
            }}>
            <MdDelete className={card__style.icon} />
          </div>
          <div className={card__style.drag_handler} id='drag-handler'>
            <RiDragMove2Line className={card__style.icon} />
          </div>
        </div>
      </div>
      <div className={card__style.card__container}>
        <div className={card__style.title}>{data.title}</div>
        <div className={card__style.description}>{data.description}</div>
        <Handlers id={id} />
        <Button size='small'>
          <a
            onClick={(e) => {
              // console.log(changes);
              // const remainingChanges = [...changes]
              //   .sort((a, b) => (a.id > b.id ? 1 : -1))
              //   .reduce((prev, curr) => {
              //     if (!prev.length) return [curr];
              //     const previousChange = prev[prev.length - 1];
              //     if (previousChange.id === curr.id)
              //       if (delta(previousChange, curr)) return prev.slice(0, -1);
              //     return [...prev, curr];
              //   }, [] as Changes[]);
              // if (remainingChanges.length) {
              //   e.preventDefault();
              //   openModal<string>("save-changes", id);
              //   return;
              // }
              // animateOut();
            }}>
            ZOOM
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CustomCard;
