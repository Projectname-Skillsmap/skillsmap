import { Node } from 'react-flow-renderer';

export interface Position {
  x: number;
  y: number;
}
export interface CardMetrics extends Position {
  width: number;
  height: number;
}

export interface System {
  x: number;
  y: number;
  addDeltaX: -1 | 1;
  addDeltaY: -1 | 1;
}

export const getCardSystemOrigin = (
  w: number,
  h: number,
  x: number,
  y: number
): System => {
  if (x <= w / 2 && y <= h / 2)
    return {
      x: 0,
      y: 0,
      addDeltaX: -1,
      addDeltaY: -1,
    };
  if (x >= w / 2 && y <= h / 2)
    return {
      x: w,
      y: 0,
      addDeltaX: 1,
      addDeltaY: -1,
    };
  if (x <= w / 2 && y >= h / 2)
    return {
      x: 0,
      y: h,
      addDeltaX: -1,
      addDeltaY: 1,
    };
  return {
    x: w,
    y: h,
    addDeltaX: 1,
    addDeltaY: 1,
  };
};

export const snapCoordinates = (
  cursorPosition: Position,
  systemOrigin: System
) => {
  const deltaX = Math.abs(cursorPosition.x - systemOrigin.x);
  const deltaY = Math.abs(cursorPosition.y - systemOrigin.y);

  if (deltaX < deltaY) {
    return {
      x: cursorPosition.x + systemOrigin.addDeltaX * deltaX,
      y: cursorPosition.y,
    };
  } else {
    return {
      x: cursorPosition.x,
      y: cursorPosition.y + systemOrigin.addDeltaY * deltaY,
    };
  }
};

export const getCardMetrics = (card: Node) => {
  return {
    x: card.position.x,
    y: card.position.y,
    width: card.width,
    height: card.height,
  } as CardMetrics;
};

export const snapEdge = (
  cardMetrics: CardMetrics,
  cursorPosition: Position
) => {
  const { width, height } = cardMetrics;

  const { x, y } = {
    x: Math.abs(cardMetrics.x - cursorPosition.x),
    y: Math.abs(cardMetrics.y - cursorPosition.y),
  };

  const systemOrigin = getCardSystemOrigin(width, height, x, y);
  return snapCoordinates({ x, y }, systemOrigin);
};
