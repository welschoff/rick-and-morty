import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  imgSrc,
  name,
  status,
  race,
  location,
  firstSeen,
}) {
  const characterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      createElement('img', {
        src: imgSrc,
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
              textContent: `${status} - ${race}`,
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
