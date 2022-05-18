import { recordChange } from 'src/changes/changes';
import { createNodeFrom } from 'src/components/Toolbar/Buttons/Add-Card/add-card.slice';
import { useAppDispatch, useAppSelector } from 'src/redux/redux-hooks';
import { CardPayload, createCardFrom } from 'src/utils/card';

export const useNewNode = () => {
  return useAppSelector(({ newCard }) => newCard);
};

export const useCreateNode = () => {
  const dispatch = useAppDispatch();
  return (input: CardPayload) => {
    const card = createCardFrom(input);
    dispatch(
      recordChange({
        entity: 'NODE',
        id: card.id,
        type: 'ADD',
      })
    );
    dispatch(createNodeFrom(card));
  };
};
