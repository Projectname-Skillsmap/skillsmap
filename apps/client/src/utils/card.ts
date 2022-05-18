import { Node } from 'react-flow-renderer';
import slugify from 'slugify';

export interface CardPayload {
  title: string;
  description: string;
}

export const IDFrom = (title: string) => {
  return slugify(title, {
    lower: true,
    replacement: '-',
  });
};

export const createCardFrom = (cardPayload: CardPayload) => {
  const { title, description } = cardPayload;
  return {
    id: IDFrom(title),
    data: {
      description,
      title,
    },
    type: 'Card',
    position: {
      x: 0,
      y: 0,
    },
    dragHandle: '#drag-handler',
  } as Node<CardPayload>;
};
