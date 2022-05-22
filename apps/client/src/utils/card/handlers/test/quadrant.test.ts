import { getCardSystemOrigin } from '../snap-to-edge';

interface Input {
  x: number;
  y: number;
  w: number;
  h: number;
}

type Expect<T> = Record<'expected', T>;
type Case<T> = Input & Expect<T>;

const cases: Case<{ x: number; y: number }>[] = [
  {
    expected: {
      x: 0,
      y: 0,
    },
    h: 250,
    w: 250,
    x: 0,
    y: 0,
  },
  {
    expected: {
      x: 0,
      y: 0,
    },
    h: 250,
    w: 250,
    x: 20,
    y: 90,
  },
  {
    expected: {
      x: 0,
      y: 0,
    },
    h: 250,
    w: 250,
    x: 125,
    y: 124,
  },
  {
    expected: {
      x: 250,
      y: 0,
    },
    h: 250,
    w: 250,
    x: 126,
    y: 0,
  },
];
test.each(cases)(
  // the coordinates and multiplying factors are used in further calculations for edge snapping
  'return the coordinates and multiplying factors based on user input and card dimensions',
  ({ expected, h, w, x, y }) => {
    const { x: originX, y: originY } = getCardSystemOrigin(w, h, x, y);
    expect(originX).toBe(expected.x);
    expect(originY).toBe(expected.y);
  }
);
