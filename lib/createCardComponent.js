import { createElement } from './elements';

export function createCardComponent() {
  const cardElement = createElement('div', {
    className: 'card',
  });

  // Return it
  return cardElement;
}
