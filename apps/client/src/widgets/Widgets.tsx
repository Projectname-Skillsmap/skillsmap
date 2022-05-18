import { useAppSelector } from 'src/redux/redux-hooks';
import CustomizeCard from './CustomizeCard/CustomizeCard';
import SaveChanges from './SaveChanges/SaveChanges';
const Widgets = () => {
  const { visible, levelID } = useAppSelector(({ saveChanges }) => saveChanges);
  return (
    <>
      <CustomizeCard />
      {visible ? <SaveChanges id={levelID} /> : null}
    </>
  );
};

export default Widgets;
