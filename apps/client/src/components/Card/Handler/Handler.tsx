import React, { FC, useEffect, useState } from 'react';
import { Handle } from 'react-flow-renderer';
import { useAppSelector } from 'src/redux/redux-hooks';
import { useCreateConnection } from 'src/hooks/map/edges/useCreateEdge';
import { useUpdateHandlers } from 'src/hooks/map/nodes/handlers/useUpdateHandlers';
import { editingEdge$ } from 'src/components/Toolbar/Buttons/Add-Edge/AddEdge';
import { handlersPosition } from './handlers-position';

const Handlers: FC<{ id: string }> = ({ id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handlers = useAppSelector(({ card }) => card.handlers);
  const updateHandlers = useUpdateHandlers();
  const createConnection = useCreateConnection();
  /**
   * Tracking if the user is in edge-editing mode
   */
  useEffect(() => {
    const subscription = editingEdge$.subscribe(setIsEditing);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <Handle
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          borderRadius: '0',
          border: 'none',
          background: 'transparent',
          zIndex: 1,
          // If the user is in edge-editing mode, we cover the card with a transparent
          // handler. This way they can drag edges from anywhere inside the card.
          // If not in edge-editing, the handler should not be visible
          visibility: isEditing ? 'visible' : 'hidden',
        }}
        id={id}
        onConnect={({ source, sourceHandle, target, targetHandle }) => {
          if (source === target) return;
          handlersPosition.subscribe(
            ({ sourceHandlerPosition, targetHandlerPosition }) => {
              console.log(sourceHandlerPosition, targetHandlerPosition);
              const sourceID = updateHandlers(
                source as string,
                sourceHandlerPosition,
                'source'
              );

              const targetID = updateHandlers(
                target as string,
                targetHandlerPosition,
                'target'
              );
              createConnection(
                source as string,
                sourceID,
                target as string,
                targetID
              );
            }
          );
        }}
        type="source"
      />

      {(handlers[id] || []).map(({ handleX, handleY, targetID, type }) => (
        <Handle
          style={{
            left: handleX,
            top: handleY,
          }}
          type={type}
          id={targetID as string}
          key={targetID}
        />
      ))}
    </>
  );
};

export default Handlers;
