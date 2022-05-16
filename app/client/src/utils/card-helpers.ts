import { HandleElement, Node, useNodes } from "react-flow-renderer";
import slugify from "slugify";

export interface CardPayload {
  title: string;
  description: string;
}

export const normalizeCards = (cardsFromDatabase: Node<CardPayload>[]) => {
  return cardsFromDatabase.map(
    (card) =>
      ({
        ...card,
        id: card.id,
        position: card.position,
      } as Node<CardPayload>)
  );
};

export const IDFrom = (s: string) => {
  return slugify(s || "", {
    lower: true,
  });
};

export const createCardFrom = ({ description, title }: CardPayload) => {
  return {
    id: IDFrom(title),
    data: {
      description,
      title,
    },
    type: "Card",
    position: {
      x: 0,
      y: 0,
    },
    dragHandle: "#drag-handler",
  } as Node<CardPayload>;
};
