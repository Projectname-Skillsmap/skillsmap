import { snapEdge, CardMetrics, Position } from '../snap-to-edge';

interface Input {
  cursorPosition: Position;
  cardMetrics: CardMetrics;
}

type Expect<T> = Record<'expected', T>;
type Case<T> = Input & Expect<T>;

const cases: Case<{ x: number; y: number }>[] = [
  {
    cardMetrics: {
      height: 250,
      width: 250,
      x: 0,
      y: 0,
    },
    cursorPosition: {
      x: 40,
      y: 124,
    },
    expected: {
      x: 0,
      y: 124,
    },
  },
  {
    cardMetrics: {
      height: 250,
      width: 250,
      x: 0,
      y: 0,
    },
    cursorPosition: {
      x: 134,
      y: 40,
    },
    expected: {
      x: 134,
      y: 0,
    },
  },

  {
    cardMetrics: {
      height: 250,
      width: 250,
      x: 0,
      y: 0,
    },
    cursorPosition: {
      x: 244,
      y: 127,
    },
    expected: {
      x: 250,
      y: 127,
    },
  },

  {
    cardMetrics: {
      height: 250,
      width: 250,
      x: 0,
      y: 0,
    },
    cursorPosition: {
      x: 60,
      y: 200,
    },
    expected: {
      x: 60,
      y: 250,
    },
  },
];

test.each(cases)(
  'returns the coordinates where the handler is going to be placed',
  ({ cardMetrics, cursorPosition, expected }) => {
    const { x, y } = snapEdge(cardMetrics, cursorPosition);
    expect(x).toBe(expected.x);
    expect(y).toBe(expected.y);
  }
);
