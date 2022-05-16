import { b as useStore } from './index-3de2b4dd.js';
import 'zustand';
import 'zustand/context';
import 'd3-zoom';

var nodesSelector = function nodesSelector(state) {
  return Array.from(state.nodeInternals.values());
};

function useNodes() {
  var nodes = useStore(nodesSelector);
  return nodes;
}

export { useNodes as default };
//# sourceMappingURL=useNodes.js.map
