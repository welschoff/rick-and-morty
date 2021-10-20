import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({ name, location, firstSeen }) {
  const characterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      createElement('img', {
        src: 'https://rickandmortyapi.com/api/character/avatar/138.jpeg',
      }),

      createElement('div', {}, [
        createElement(
          'div',
          {
            className: styles.header,
          },
          [
            createElement('h2', {
              textContent: name,
            }),
            createElement('p', {
              textContent: 'Dead - Human',
            }),
          ]
        ),
        createElement(
          'div',
          {
            className: styles.location,
          },
          [
            createElement('h3', {
              textContent: 'Last known location:',
            }),
            createElement('p', {
              textContent: location,
            }),
          ]
        ),
        createElement(
          'div',
          {
            className: styles.seen,
          },
          [
            createElement('h3', {
              textContent: 'First seen in:',
            }),
            createElement('p', {
              textContent: firstSeen,
            }),
          ]
        ),
      ]),
    ]
  );

  return characterCard;
}
