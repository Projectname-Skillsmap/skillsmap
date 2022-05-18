import { useAppSelector } from 'src/redux/redux-hooks';
import { remainingChanges } from 'src/utils/changes/delta';

const useChanges = () => {
  const changes = useAppSelector(({ changes }) => changes);
  return remainingChanges(changes);
};

export default useChanges;
