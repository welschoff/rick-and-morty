import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

const cardImage = createElement('img', {
  src: 'https://rickandmortyapi.com/api/character/avatar/138.jpeg',
});

const cardheader = createElement(
  'div',
  {
    className: styles.header,
  },
  [
    createElement('h1', {
      textContent: 'General Nathan',
    }),
    createElement('p', {
      textContent: 'Dead - Human',
    }),
  ]
);

const cardLocation = createElement(
  'div',
  {
    className: styles.location,
  },
  [
    createElement('p', {
      textContent: 'Last known location:',
    }),
    createElement('h2', {
      textContent: 'Earth (Replacement Dimension)',
    }),
  ]
);

const cardFirstSeen = createElement(
  'div',
  {
    className: styles.seen,
  },
  [
    createElement('p', {
      textContent: 'First seen in:',
    }),
    createElement('h2', {
      textContent: 'Get Schwifty',
    }),
  ]
);

export default function createCharacterCard() {
  const characterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      cardImage,
      createElement('div', {}, [cardheader, cardLocation, cardFirstSeen]),
    ]
  );

  return characterCard;
}
