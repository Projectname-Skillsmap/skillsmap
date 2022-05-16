import { useAppSelector } from "@redux/redux-hooks";
import { remainingChanges } from "@utils/changes/delta";

const useChanges = () => {
  const changes = useAppSelector(({ changes }) => changes);
  return remainingChanges(changes);
};

export default useChanges;
