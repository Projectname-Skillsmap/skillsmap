import { first, map, ReplaySubject, Subject, withLatestFrom } from "rxjs";

interface HandlerPosition {
  x: number;
  y: number;
}

const sourceHandlerPosition$ = new ReplaySubject<HandlerPosition>(1);
const targetHandlerPosition$ = new Subject<HandlerPosition>();

export const updateSourceHandlerPosition = (
  newHandlerPosition: HandlerPosition
) => {
  sourceHandlerPosition$.next(newHandlerPosition);
};

export const updateTargetHandlerPosition = (
  newHandlerPosition: HandlerPosition
) => {
  targetHandlerPosition$.next(newHandlerPosition);
};

export const handlersPosition = targetHandlerPosition$.pipe(
  withLatestFrom(sourceHandlerPosition$),
  map(([targetHandlerPosition, sourceHandlerPosition]) => {
    return {
      targetHandlerPosition,
      sourceHandlerPosition,
    };
  }),
  first()
);
