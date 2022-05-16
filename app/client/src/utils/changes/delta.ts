import { Change } from "@changes/changes";

const value = {
  DELETE: -1,
  MODIFY: 0,
  ADD: 1,
};

const delta = (prev: Change, curr: Change) =>
  !(value[prev.type] + value[curr.type]);

export const remainingChanges = (changes: Change[]) =>
  [...changes]
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .reduce((prev, curr) => {
      if (!prev.length) return [curr];
      const previousChange = prev[prev.length - 1];
      if (previousChange.id === curr.id)
        if (delta(previousChange, curr)) return prev.slice(0, -1);
      return [...prev, curr];
    }, [] as Change[]);
