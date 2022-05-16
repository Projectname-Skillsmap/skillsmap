import { recordChange } from "@changes/changes";
import { createNodeFrom } from "@components/Toolbar/Buttons/Add-Card/add-card.slice";
import { useAppDispatch, useAppSelector } from "@redux/redux-hooks";
import { CardPayload, createCardFrom } from "@utils/card-helpers";

export const useNewNode = () => {
  return useAppSelector(({ newCard }) => newCard);
};

export const useCreateNode = () => {
  const dispatch = useAppDispatch();
  return (input: CardPayload) => {
    const card = createCardFrom(input);
    dispatch(
      recordChange({
        entity: "NODE",
        id: card.id,
        type: "ADD",
      })
    );
    dispatch(createNodeFrom(card));
  };
};
